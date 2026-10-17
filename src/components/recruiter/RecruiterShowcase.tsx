import {
  MdFlashOn,
  MdFilterList,
  MdCheckCircle,
  MdEngineering,
  MdScience,
  MdTerminal,
  MdSmartToy,
  MdQuestionAnswer,
  MdArrowForward,
} from "react-icons/md";
import { HubTabId } from "./RecruiterHubModal";
import "./styles/RecruiterShowcase.css";

interface RecruiterShowcaseProps {
  onOpenTab: (tabId: HubTabId) => void;
}

export const RecruiterShowcase = ({ onOpenTab }: RecruiterShowcaseProps) => {
  const cards: {
    id: HubTabId;
    title: string;
    subtitle: string;
    icon: JSX.Element;
    badge: string;
    actionLabel: string;
  }[] = [
    {
      id: "60s",
      title: "60-Second Recruiter Review",
      subtitle: "High-speed briefing: target roles, 3 strongest skills, 2 top projects, and resume download.",
      icon: <MdFlashOn />,
      badge: "60s Fast-Track",
      actionLabel: "Launch 60s View",
    },
    {
      id: "roles",
      title: "Targeted Job Positioning",
      subtitle: "Switch views for Python Developer, GenAI Engineer, or AI/ML roles with dedicated URLs.",
      icon: <MdFilterList />,
      badge: "URL Switcher",
      actionLabel: "Customize View",
    },
    {
      id: "proof",
      title: "Proof of Work & Telemetry",
      subtitle: "Live status matrix, system architecture, verified API endpoints, and automated tests.",
      icon: <MdCheckCircle />,
      badge: "Live Evidence",
      actionLabel: "Inspect Proof",
    },
    {
      id: "casestudy",
      title: "Deep Case Study: AI Copilot",
      subtitle: "How I brought audio RAG response latency from 4,200ms down to 840ms with WebSockets.",
      icon: <MdEngineering />,
      badge: "80% Latency Drop",
      actionLabel: "Read Case Study",
    },
    {
      id: "break",
      title: "Try to Break My Project",
      subtitle: "Interactive chaos testbench: simulate 429 rate limits, socket drops, and prompt injection.",
      icon: <MdScience />,
      badge: "Chaos Simulator",
      actionLabel: "Run Chaos Test",
    },
    {
      id: "challenge",
      title: "1-Minute Python Challenge",
      subtitle: "Live algorithmic thinking, edge cases, typed production Python code, and Big-O bounds.",
      icon: <MdTerminal />,
      badge: "Live Code",
      actionLabel: "Solve Live",
    },
    {
      id: "qa",
      title: "Verified Project Q&A Engine",
      subtitle: "Ask me anything about my projects. Strictly grounded with zero hallucinations.",
      icon: <MdSmartToy />,
      badge: "Zero Hallucination",
      actionLabel: "Ask Question",
    },
    {
      id: "why",
      title: "Why Should You Interview Me?",
      subtitle: "6 brutally specific proof-backed reasons with verifiable links and benchmark metrics.",
      icon: <MdQuestionAnswer />,
      badge: "6 Proof Points",
      actionLabel: "View Proofs",
    },
  ];

  return (
    <div className="showcase-section section-container" id="recruiter-hub">
      <div className="showcase-container">
        <div className="showcase-header">
          <span className="showcase-badge">
            <MdFlashOn /> RECRUITER & HIRING MANAGER SUITE
          </span>
          <h2 className="showcase-title">
            Engineering Evidence & <span>Interactive Hub</span>
          </h2>
          <p className="showcase-description">
            Standard portfolios only show static screenshots. Click any button below to launch our
            interactive engineering validation suite—built specifically for technical hiring workflows:
          </p>
        </div>

        <div className="showcase-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className="showcase-card"
              onClick={() => onOpenTab(card.id)}
            >
              <div className="showcase-card-top">
                <span className="showcase-icon-wrap">{card.icon}</span>
                <span className="showcase-card-badge">{card.badge}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
              <button
                type="button"
                className="showcase-card-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenTab(card.id);
                }}
              >
                <span>{card.actionLabel}</span>
                <MdArrowForward className="btn-arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
