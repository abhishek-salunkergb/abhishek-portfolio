import { useState } from "react";
import { portfolioData, TechnicalChallenge } from "../../data/portfolioData";
import {
  MdTerminal,
  MdCheckCircle,
  MdPsychology,
  MdCode,
  MdSpeed,
  MdContentCopy,
  MdCheck,
} from "react-icons/md";
import "./styles/TechChallenge.css";

export const TechChallenge = () => {
  const { technicalChallenges } = portfolioData;
  const [selectedDifficulty, setSelectedDifficulty] = useState<"Easy" | "Medium" | "Hard">("Medium");
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const activeChallenge: TechnicalChallenge =
    technicalChallenges.find((c) => c.difficulty === selectedDifficulty) || technicalChallenges[1];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeChallenge.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="challenge-section section-container" id="technical-challenge">
      <div className="challenge-container">
        <div className="section-header-row">
          <div className="section-subtitle">
            <MdTerminal className="term-icon" /> LIVE SKILL VALIDATION
          </div>
          <h2 className="section-main-title">
            1-Minute <span>Python Challenge</span>
          </h2>
          <p className="section-description">
            Want to test my Python skills? Don't take my word for it. Select a problem difficulty below
            to inspect my algorithmic thinking, edge-case analysis, typed production Python code, and complexity bounds:
          </p>
        </div>

        {/* Difficulty Selector Tabs */}
        <div className="challenge-tabs-row">
          {(["Easy", "Medium", "Hard"] as const).map((diff) => (
            <button
              key={diff}
              type="button"
              className={`challenge-diff-btn ${selectedDifficulty === diff ? "active" : ""} ${diff.toLowerCase()}`}
              onClick={() => setSelectedDifficulty(diff)}
            >
              <span className="diff-indicator"></span>
              <span className="diff-title">{diff} Challenge</span>
              <span className="diff-subtitle">
                {diff === "Easy" && "Stream Frequency & Sorting"}
                {diff === "Medium" && "LRU Cache + TTL Expiry"}
                {diff === "Hard" && "Async Semaphore & Worker Queue"}
              </span>
            </button>
          ))}
        </div>

        {/* Challenge Breakdown Card */}
        <div className="challenge-display-card">
          <div className="challenge-card-header">
            <div className="challenge-info">
              <span className={`diff-pill ${activeChallenge.difficulty.toLowerCase()}`}>
                {activeChallenge.difficulty}
              </span>
              <h3>{activeChallenge.title}</h3>
            </div>
            <button
              type="button"
              className={`copy-code-btn ${copiedCode ? "copied" : ""}`}
              onClick={handleCopyCode}
            >
              {copiedCode ? <MdCheck /> : <MdContentCopy />}
              <span>{copiedCode ? "Code Copied!" : "Copy Python Snippet"}</span>
            </button>
          </div>

          <div className="challenge-card-body">
            {/* Problem Statement */}
            <div className="challenge-block">
              <div className="block-title">
                <span className="block-num">01</span> The Problem Statement
              </div>
              <p className="block-content">{activeChallenge.problem}</p>
            </div>

            {/* Engineering Thinking & Tradeoffs */}
            <div className="challenge-block">
              <div className="block-title">
                <span className="block-num">02</span>
                <MdPsychology className="icon-thinking" /> Engineering Approach & Tradeoffs
              </div>
              <p className="block-content">{activeChallenge.thinking}</p>
            </div>

            {/* Python Code Display */}
            <div className="challenge-block code-block">
              <div className="block-title">
                <span className="block-num">03</span>
                <MdCode /> Production Python Code
              </div>
              <div className="challenge-code-screen">
                <pre>
                  <code>{activeChallenge.code}</code>
                </pre>
              </div>
            </div>

            {/* Complexity & Test Cases */}
            <div className="challenge-meta-row">
              <div className="complexity-cell">
                <div className="meta-label">
                  <MdSpeed /> Time Complexity:
                </div>
                <div className="meta-val">{activeChallenge.timeComplexity}</div>
              </div>
              <div className="complexity-cell">
                <div className="meta-label">
                  <MdSpeed /> Space Complexity:
                </div>
                <div className="meta-val">{activeChallenge.spaceComplexity}</div>
              </div>
              <div className="complexity-cell tests-cell">
                <div className="meta-label">
                  <MdCheckCircle className="check-icon" /> Execution Validation:
                </div>
                <div className="meta-val test-output-val">{activeChallenge.testCases}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
