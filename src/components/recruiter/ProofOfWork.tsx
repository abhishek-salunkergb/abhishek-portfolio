import { useState } from "react";
import { portfolioData, ProofOfWorkItem } from "../../data/portfolioData";
import {
  MdCheckCircle,
  MdCode,
  MdArrowOutward,
  MdHub,
  MdOutlineRule,
  MdPerson,
  MdSpeed,
} from "react-icons/md";
import "./styles/ProofOfWork.css";

export const ProofOfWork = () => {
  const { proofOfWork } = portfolioData;
  const [selectedProjectId, setSelectedProjectId] = useState<string>(proofOfWork[0].id);
  const [activeTab, setActiveTab] = useState<"arch" | "api" | "tests" | "built" | "metrics">("arch");

  const selectedProject: ProofOfWorkItem =
    proofOfWork.find((item) => item.id === selectedProjectId) || proofOfWork[0];

  return (
    <div className="proof-section section-container" id="proof-of-work">
      <div className="proof-container">
        <div className="section-header-row">
          <div className="section-subtitle">CONCRETE ENGINEERING EVIDENCE</div>
          <h2 className="section-main-title">
            Proof of <span>Work</span>
          </h2>
          <p className="section-description">
            Junior portfolios often list tools without evidence. Below is verifiable proof: live statuses,
            system architecture, real API endpoint contracts, test scenarios, and specific personal contributions.
          </p>
        </div>

        {/* Live Status Evidence Matrix */}
        <div className="proof-matrix-table-wrap">
          <table className="proof-matrix-table">
            <thead>
              <tr>
                <th>PROJECT</th>
                <th>CATEGORY</th>
                <th>DEPLOYMENT STATUS</th>
                <th>BENCHMARK METRICS</th>
                <th>SOURCE & ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {proofOfWork.map((project) => {
                const isSelected = project.id === selectedProjectId;
                return (
                  <tr
                    key={project.id}
                    className={`matrix-row ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedProjectId(project.id)}
                  >
                    <td className="cell-title">
                      <strong>{project.title}</strong>
                    </td>
                    <td className="cell-category">{project.category}</td>
                    <td className="cell-status">
                      <span
                        className="status-pill"
                        style={{
                          backgroundColor: `${project.statusColor}1f`,
                          borderColor: `${project.statusColor}55`,
                          color: project.statusColor,
                        }}
                      >
                        <span
                          className="status-dot"
                          style={{ backgroundColor: project.statusColor }}
                        ></span>
                        {project.status}
                      </span>
                    </td>
                    <td className="cell-metrics">
                      {project.metrics.map((m, idx) => (
                        <span key={idx} className="matrix-metric-tag">
                          {m.label}: <strong>{m.value}</strong>
                        </span>
                      ))}
                    </td>
                    <td className="cell-actions">
                      <button
                        type="button"
                        className={`inspect-btn ${isSelected ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProjectId(project.id);
                        }}
                      >
                        {isSelected ? "Inspecting" : "Inspect Deeply"}
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="table-github-link"
                        title="View GitHub Repository"
                      >
                        <MdArrowOutward />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Deep Evidence Inspector Card */}
        <div className="evidence-inspector-card">
          <div className="inspector-header">
            <div className="inspector-project-info">
              <h3>
                Deep Evidence: <span>{selectedProject.title}</span>
              </h3>
              <p>{selectedProject.category}</p>
            </div>
            <div className="inspector-tabs">
              <button
                type="button"
                className={`tab-btn ${activeTab === "arch" ? "active" : ""}`}
                onClick={() => setActiveTab("arch")}
              >
                <MdHub /> Architecture
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === "api" ? "active" : ""}`}
                onClick={() => setActiveTab("api")}
              >
                <MdCode /> API Endpoints
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === "tests" ? "active" : ""}`}
                onClick={() => setActiveTab("tests")}
              >
                <MdOutlineRule /> Tests & Resilience
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === "built" ? "active" : ""}`}
                onClick={() => setActiveTab("built")}
              >
                <MdPerson /> What I Personally Built
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === "metrics" ? "active" : ""}`}
                onClick={() => setActiveTab("metrics")}
              >
                <MdSpeed /> Telemetry
              </button>
            </div>
          </div>

          <div className="inspector-content-body">
            {activeTab === "arch" && (
              <div className="tab-pane arch-pane">
                <h4>System Architecture & Data Flow</h4>
                <p className="pane-lead">{selectedProject.architectureSummary}</p>
                <div className="flow-diagram-box">
                  <div className="diagram-step">
                    <span className="step-num">Step 1</span>
                    <span className="step-label">Client Input / Ingestion</span>
                  </div>
                  <div className="diagram-arrow">➔</div>
                  <div className="diagram-step">
                    <span className="step-num">Step 2</span>
                    <span className="step-label">Python Async Service / RAG</span>
                  </div>
                  <div className="diagram-arrow">➔</div>
                  <div className="diagram-step">
                    <span className="step-num">Step 3</span>
                    <span className="step-label">Model / DB Execution</span>
                  </div>
                  <div className="diagram-arrow">➔</div>
                  <div className="diagram-step">
                    <span className="step-num">Step 4</span>
                    <span className="step-label">Streamed Output / Telemetry</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "api" && (
              <div className="tab-pane api-pane">
                <h4>Verified API Endpoints & Contracts</h4>
                <div className="endpoint-list">
                  {selectedProject.apiEndpoints.map((ep, idx) => (
                    <div key={idx} className="endpoint-item">
                      <code>{ep}</code>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tests" && (
              <div className="tab-pane tests-pane">
                <h4>Automated Tests & Error Recovery Validations</h4>
                <ul className="test-list">
                  {selectedProject.testHighlights.map((test, idx) => (
                    <li key={idx} className="test-item">
                      <MdCheckCircle className="check-icon" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "built" && (
              <div className="tab-pane built-pane">
                <h4>Specific Personal Engineering Contributions</h4>
                <ul className="built-list">
                  {selectedProject.whatIBuilt.map((item, idx) => (
                    <li key={idx} className="built-item">
                      <span className="built-bullet">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "metrics" && (
              <div className="tab-pane metrics-pane">
                <h4>Production Telemetry & Metrics</h4>
                <div className="metrics-grid">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <div className="metric-box-val">{m.value}</div>
                      <div className="metric-box-lbl">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="inspector-footer">
            <span className="inspector-status-hint">
              Targeting: Verified engineering code with zero artificial claims.
            </span>
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inspector-repo-link"
            >
              Inspect Source on GitHub <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
