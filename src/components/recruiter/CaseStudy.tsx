import { portfolioData } from "../../data/portfolioData";
import {
  MdEngineering,
  MdCompareArrows,
  MdOutlineBugReport,
  MdArrowDownward,
  MdUpgrade,
  MdArrowOutward,
} from "react-icons/md";
import "./styles/CaseStudy.css";

export const CaseStudy = () => {
  const { caseStudy, profile } = portfolioData;

  return (
    <div className="casestudy-section section-container" id="case-study">
      <div className="casestudy-container">
        <div className="section-header-row">
          <div className="section-subtitle">
            <MdEngineering className="eng-icon" /> MINI ENGINEERING CASE STUDY
          </div>
          <h2 className="section-main-title">
            Deep Dive: <span>{caseStudy.title}</span>
          </h2>
          <p className="section-description">{caseStudy.tagline}</p>
        </div>

        {/* Problem Statement Card */}
        <div className="case-card problem-card">
          <div className="case-card-header">
            <h3>01. Problem Statement & Friction in Existing Solutions</h3>
          </div>
          <p className="case-text">{caseStudy.problem}</p>
        </div>

        {/* Architecture Pipeline Flow */}
        <div className="case-card">
          <div className="case-card-header">
            <h3>02. End-to-End Low-Latency Pipeline Flow</h3>
          </div>
          <div className="arch-flow-steps">
            {caseStudy.architectureFlow.map((step, idx) => (
              <div key={idx} className="flow-step-item">
                <div className="flow-step-badge">{step.step}</div>
                <div className="flow-step-detail">{step.detail}</div>
                {idx < caseStudy.architectureFlow.length - 1 && (
                  <div className="flow-step-connector">
                    <MdArrowDownward />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RAG & Prompt Engineering Deep Dive */}
        <div className="case-card">
          <div className="case-card-header">
            <h3>03. RAG Pipeline & Hallucination Prevention</h3>
          </div>
          <div className="rag-grid">
            <div className="rag-cell">
              <span className="rag-tag">A. Section Ingestion</span>
              <p>{caseStudy.ragPipeline.ingestion}</p>
            </div>
            <div className="rag-cell">
              <span className="rag-tag">B. Chunking Strategy</span>
              <p>{caseStudy.ragPipeline.chunking}</p>
            </div>
            <div className="rag-cell">
              <span className="rag-tag">C. Vector Retrieval</span>
              <p>{caseStudy.ragPipeline.retrieval}</p>
            </div>
            <div className="rag-cell">
              <span className="rag-tag">D. Negative Constraints</span>
              <p>{caseStudy.ragPipeline.generation}</p>
            </div>
          </div>
        </div>

        {/* Latency Reduction Breakdown */}
        <div className="case-card latency-highlight-card">
          <div className="case-card-header">
            <h3>04. Latency Optimization: 4,200ms ➔ 840ms (80% Reduction)</h3>
          </div>
          <div className="latency-comparison">
            <div className="latency-box before">
              <span className="latency-label">Initial Prototype (REST + Polling)</span>
              <span className="latency-num">{caseStudy.latencyOptimization.before}</span>
            </div>
            <div className="latency-arrow-icon">
              <MdCompareArrows />
            </div>
            <div className="latency-box after">
              <span className="latency-label">Optimized Pipeline (WebSockets + Direct Stream)</span>
              <span className="latency-num">{caseStudy.latencyOptimization.after}</span>
            </div>
          </div>
          <div className="latency-technique">
            <strong>How Latency Was Reduced:</strong> {caseStudy.latencyOptimization.technique}
          </div>
        </div>

        {/* Error Handling & Testing Grid */}
        <div className="case-dual-grid">
          <div className="case-card">
            <div className="case-card-header">
              <h3>
                <MdOutlineBugReport /> 05. Production Resilience & Fault Handling
              </h3>
            </div>
            <ul className="case-list">
              {caseStudy.errorHandling.map((item, idx) => (
                <li key={idx} className="case-list-item">
                  <span className="bullet-diamond">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="case-card">
            <div className="case-card-header">
              <h3>
                <MdUpgrade /> 06. What I Would Improve in Version 2.0
              </h3>
            </div>
            <ul className="case-list">
              {caseStudy.whatIWouldImprove.map((item, idx) => (
                <li key={idx} className="case-list-item">
                  <span className="bullet-diamond upgrade">▲</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="case-footer-action">
          <span>Interested in seeing the actual implementation files and commit history?</span>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="case-github-btn"
          >
            Explore Repo on GitHub <MdArrowOutward />
          </a>
        </div>
      </div>
    </div>
  );
};
