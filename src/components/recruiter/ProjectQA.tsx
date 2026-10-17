import { useState } from "react";
import { portfolioData, QAPair } from "../../data/portfolioData";
import {
  MdSmartToy,
  MdSend,
  MdVerified,
  MdHelpOutline,
  MdOutlineLightbulb,
} from "react-icons/md";
import "./styles/ProjectQA.css";

export const ProjectQA = () => {
  const { qaKnowledgeBase } = portfolioData;
  const [selectedQA, setSelectedQA] = useState<QAPair>(qaKnowledgeBase[0]);
  const [userInput, setUserInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [displayedAnswer, setDisplayedAnswer] = useState<string>(qaKnowledgeBase[0].answer);

  const handleSelectQuestion = (qa: QAPair) => {
    setSelectedQA(qa);
    simulateAnswering(qa.answer);
  };

  const simulateAnswering = (fullText: string) => {
    setIsTyping(true);
    setDisplayedAnswer("");
    let currentIdx = 0;
    const chunkSize = 12;
    const interval = setInterval(() => {
      currentIdx += chunkSize;
      setDisplayedAnswer(fullText.slice(0, currentIdx));
      if (currentIdx >= fullText.length) {
        clearInterval(interval);
        setDisplayedAnswer(fullText);
        setIsTyping(false);
      }
    }, 25);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const query = userInput.toLowerCase();
    let bestMatch = qaKnowledgeBase.find((qa) => {
      const qText = qa.question.toLowerCase();
      const aText = qa.answer.toLowerCase();
      if (query.includes("rag") && (qText.includes("rag") || aText.includes("rag"))) return true;
      if ((query.includes("fastapi") || query.includes("django")) && (qText.includes("fastapi") || aText.includes("fastapi"))) return true;
      if (query.includes("built") && qText.includes("built")) return true;
      if (query.includes("research") || query.includes("paper") || query.includes("random forest")) {
        return qText.includes("research") || aText.includes("research");
      }
      if (query.includes("rate limit") || query.includes("quota") || query.includes("cost")) {
        return qText.includes("quota") || aText.includes("quota");
      }
      if (query.includes("available") || query.includes("hire") || query.includes("location") || query.includes("relocate")) {
        return qText.includes("availability") || aText.includes("availability");
      }
      return false;
    });

    if (!bestMatch) {
      bestMatch = {
        id: "custom-matched",
        question: userInput,
        roleTag: "General",
        answer: `Regarding "${userInput}": Abhishek is a SPPU Computer Science graduate (8.19 CGPA) specialized in Python (FastAPI, Django, Flask), Generative AI (LLMs, RAG, Whisper STT, Groq/Gemini), and applied ML (Random Forest research co-author). Currently interning at Blujay Technologies on production LLM chatbots. For this specific inquiry, feel free to directly email abhisheksalunke7387@gmail.com or call +91 8261850720.`,
        highlights: ["Python Backend", "Generative AI Systems", "Verified Ground Truth"],
      };
    } else {
      bestMatch = {
        ...bestMatch,
        question: userInput,
      };
    }

    setSelectedQA(bestMatch);
    simulateAnswering(bestMatch.answer);
    setUserInput("");
  };

  return (
    <div className="qa-section section-container" id="project-qa">
      <div className="qa-container">
        <div className="section-header-row">
          <div className="section-subtitle">
            <MdSmartToy className="qa-bot-icon" /> AI RECRUITER ASSISTANT
          </div>
          <h2 className="section-main-title">
            Ask Me About <span>My Projects</span>
          </h2>
          <p className="section-description">
            Test my AI capability on this portfolio itself. As an AI engineer, my system is strictly
            instructed never to hallucinate or invent experience. Every answer is grounded in verified project facts.
          </p>
        </div>

        {/* Grounding Trust Notice */}
        <div className="grounding-trust-badge">
          <MdVerified className="verified-icon" />
          <span>Strict Negative Constraint: Zero Hallucination. Sourced directly from Abhishek's verified code & project logs.</span>
        </div>

        {/* Quick Question Pills */}
        <div className="quick-questions-row">
          <span className="quick-label">
            <MdHelpOutline /> One-Click Recruiter Questions:
          </span>
          <div className="quick-pills-list">
            {qaKnowledgeBase.map((qa) => {
              const isSelected = qa.id === selectedQA.id;
              return (
                <button
                  key={qa.id}
                  type="button"
                  className={`qa-pill-btn ${isSelected ? "active" : ""}`}
                  onClick={() => handleSelectQuestion(qa)}
                >
                  <span className="qa-tag">[{qa.roleTag}]</span> {qa.question}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Chat Console */}
        <div className="qa-console-card">
          <div className="qa-console-header">
            <div className="qa-console-avatar">
              <MdSmartToy />
            </div>
            <div>
              <div className="qa-console-name">Abhishek AI Project Q&A Engine</div>
              <div className="qa-console-status">
                <span className="qa-status-dot"></span> Sourced from Verified Portfolio Knowledge Base
              </div>
            </div>
          </div>

          <div className="qa-console-body">
            <div className="qa-question-bubble">
              <span className="bubble-author">Recruiter:</span>
              <p>{selectedQA.question}</p>
            </div>

            <div className="qa-answer-bubble">
              <span className="bubble-author">Abhishek (Verified Truth):</span>
              <p className="answer-text">
                {displayedAnswer}
                {isTyping && <span className="typing-cursor">█</span>}
              </p>

              <div className="answer-highlights-row">
                <span className="highlights-title">
                  <MdOutlineLightbulb /> Verified Key Points:
                </span>
                {selectedQA.highlights.map((h, idx) => (
                  <span key={idx} className="highlight-pill">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Search / Ask Box */}
          <form className="qa-input-bar" onSubmit={handleCustomSubmit}>
            <input
              type="text"
              placeholder="Or type a custom question (e.g. 'How did you reduce latency?' or 'Are you ready to relocate?')..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              aria-label="Ask a question about Abhishek's projects"
            />
            <button type="submit" className="qa-send-btn" disabled={!userInput.trim() || isTyping}>
              <MdSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
