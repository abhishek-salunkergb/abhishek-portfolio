import { portfolioData, WhyInterviewPoint } from "../../data/portfolioData";
import {
  MdQuestionAnswer,
  MdArrowForward,
  MdCheckCircle,
} from "react-icons/md";
import "./styles/WhyInterviewMe.css";

interface WhyInterviewMeProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const WhyInterviewMe = ({ onNavigateToSection }: WhyInterviewMeProps) => {
  const { whyInterviewMe } = portfolioData;

  const handleProofClick = (targetId: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(targetId);
    } else {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="why-section section-container" id="why-interview-me">
      <div className="why-container">
        <div className="section-header-row">
          <div className="section-subtitle">
            <MdQuestionAnswer className="why-icon" /> HIRING MANAGER FAQ
          </div>
          <h2 className="section-main-title">
            Why Should You <span>Interview Me?</span>
          </h2>
          <p className="section-description">
            No generic buzzwords ("hard-working", "passionate coder"). Below are 6 brutally specific
            reasons to hire me, backed by verifiable proof, live repositories, and benchmarked metrics:
          </p>
        </div>

        <div className="why-grid">
          {whyInterviewMe.map((item: WhyInterviewPoint) => (
            <div key={item.num} className="why-card">
              <div className="why-card-top">
                <span className="why-num">{item.num}</span>
                <span className="why-metric-pill">
                  <MdCheckCircle className="metric-icon" /> {item.metric}
                </span>
              </div>
              <h3 className="why-headline">{item.headline}</h3>
              <p className="why-proof">{item.proof}</p>
              <button
                type="button"
                className="why-proof-btn"
                onClick={() => handleProofClick(item.targetId)}
              >
                <span>Inspect Concrete Proof</span>
                <MdArrowForward className="proof-arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
