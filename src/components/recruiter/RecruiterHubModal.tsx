import { useEffect, useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import {
  MdClose,
  MdFlashOn,
  MdFilterList,
  MdCheckCircle,
  MdEngineering,
  MdScience,
  MdTerminal,
  MdSmartToy,
  MdQuestionAnswer,
  MdDownload,
  MdContentCopy,
  MdCheck,
  MdArrowOutward,
} from "react-icons/md";
import { RoleSwitcher } from "./RoleSwitcher";
import { ProofOfWork } from "./ProofOfWork";
import { CaseStudy } from "./CaseStudy";
import { BreakMyProject } from "./BreakMyProject";
import { TechChallenge } from "./TechChallenge";
import { ProjectQA } from "./ProjectQA";
import { WhyInterviewMe } from "./WhyInterviewMe";
import "./styles/RecruiterHubModal.css";

export type HubTabId =
  | "60s"
  | "roles"
  | "proof"
  | "casestudy"
  | "break"
  | "challenge"
  | "qa"
  | "why";

interface RecruiterHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: HubTabId;
  activeRoleId: string;
  onSelectRole: (roleId: string) => void;
}

export const RecruiterHubModal = ({
  isOpen,
  onClose,
  initialTab = "60s",
  activeRoleId,
  onSelectRole,
}: RecruiterHubModalProps) => {
  const [activeTab, setActiveTab] = useState<HubTabId>(initialTab);
  const { recruiterMode, profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(60);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSecondsRemaining(60);
      return;
    }

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const navItems: { id: HubTabId; label: string; icon: JSX.Element; badge?: string }[] = [
    { id: "60s", label: "60s Review", icon: <MdFlashOn />, badge: `${secondsRemaining}s` },
    { id: "roles", label: "Job Category", icon: <MdFilterList /> },
    { id: "proof", label: "Proof of Work", icon: <MdCheckCircle /> },
    { id: "casestudy", label: "Deep Case Study", icon: <MdEngineering /> },
    { id: "break", label: "Break My Project", icon: <MdScience /> },
    { id: "challenge", label: "Python Challenge", icon: <MdTerminal /> },
    { id: "qa", label: "Verified Project Q&A", icon: <MdSmartToy /> },
    { id: "why", label: "Why Interview Me?", icon: <MdQuestionAnswer /> },
  ];

  return (
    <div
      className="hub-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="hub-modal-shell" onClick={(e) => e.stopPropagation()}>
        {/* Hub Header */}
        <div className="hub-header">
          <div className="hub-header-brand">
            <span className="hub-badge">
              <MdFlashOn /> RECRUITER & ENGINEERING COMMAND HUB
            </span>
            <h2>Abhishek Salunke — Technical Validation</h2>
          </div>
          <div className="hub-header-actions">
            <a
              href={profile.socials.resume}
              download="Abhishek_Salunke_Resume.pdf"
              className="hub-resume-btn"
            >
              <MdDownload /> Resume PDF
            </a>
            <button
              type="button"
              className="hub-close-btn"
              onClick={onClose}
              aria-label="Close Hub"
            >
              <MdClose />
            </button>
          </div>
        </div>

        {/* Hub Tab Bar */}
        <div className="hub-tabs-row">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`hub-tab-btn ${activeTab === item.id ? "active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="hub-tab-icon">{item.icon}</span>
              <span className="hub-tab-label">{item.label}</span>
              {item.badge && <span className="hub-tab-badge">{item.badge}</span>}
            </button>
          ))}
        </div>

        {/* Hub Content Area */}
        <div className="hub-body-scroll">
          {activeTab === "60s" && (
            <div className="hub-tab-pane">
              <div className="recruiter-snapshot-card">
                <div className="candidate-primary">
                  <h2>{profile.fullName}</h2>
                  <p className="candidate-headline">{profile.title}</p>
                  <div className="candidate-status-tag">
                    <span className="live-dot"></span>
                    <span>{profile.availability}</span>
                  </div>
                </div>
                <div className="recruiter-cta-actions">
                  <a
                    href={profile.socials.resume}
                    download="Abhishek_Salunke_Resume.pdf"
                    className="recruiter-btn primary"
                  >
                    <MdDownload /> Download Resume (PDF)
                  </a>
                  <button
                    type="button"
                    className={`recruiter-btn outline ${copiedEmail ? "copied" : ""}`}
                    onClick={() => handleCopy(profile.email, "email")}
                  >
                    {copiedEmail ? <MdCheck /> : <MdContentCopy />} {copiedEmail ? "Email Copied!" : "Copy Email"}
                  </button>
                  <button
                    type="button"
                    className={`recruiter-btn outline ${copiedPhone ? "copied" : ""}`}
                    onClick={() => handleCopy(profile.phone, "phone")}
                  >
                    {copiedPhone ? <MdCheck /> : <MdContentCopy />} {copiedPhone ? "Phone Copied!" : "Copy Phone"}
                  </button>
                </div>
              </div>

              {/* Target Roles */}
              <div className="recruiter-section">
                <h3 className="section-title">TARGET ROLES</h3>
                <div className="target-roles-grid">
                  {recruiterMode.targetRoles.map((role, idx) => (
                    <div className="target-role-chip" key={idx}>
                      <span className="chip-indicator">✓</span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Core Strengths */}
              <div className="recruiter-section">
                <h3 className="section-title">3 STRONGEST ENGINEERING SKILLS</h3>
                <div className="strongest-skills-grid">
                  {recruiterMode.strongestSkills.map((skill, idx) => (
                    <div className="strength-card" key={idx}>
                      <div className="strength-number">0{idx + 1}</div>
                      <h4>{skill.name}</h4>
                      <p>{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2 Top Projects */}
              <div className="recruiter-section">
                <h3 className="section-title">2 STRONGEST VERIFIED PROJECTS</h3>
                <div className="strongest-projects-grid">
                  {recruiterMode.strongestProjects.map((project, idx) => (
                    <div className="project-mini-card" key={idx}>
                      <div className="project-mini-header">
                        <h4>{project.title}</h4>
                        <span className="project-mini-tag">{project.tag}</span>
                      </div>
                      <div className="project-mini-metrics">{project.metrics}</div>
                      <p>{project.summary}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link"
                      >
                        View Source & Architecture <MdArrowOutward />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic & Credentials */}
              <div className="recruiter-section credentials-footer">
                <div className="creds-content">
                  <strong>Academic Distinction:</strong> {recruiterMode.academicAndCreds}
                </div>
                <div className="recruiter-footer-actions">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    GitHub Profile <MdArrowOutward />
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    LinkedIn Profile <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === "roles" && (
            <div className="hub-tab-pane">
              <RoleSwitcher
                activeRoleId={activeRoleId}
                onSelectRole={onSelectRole}
              />
            </div>
          )}

          {activeTab === "proof" && (
            <div className="hub-tab-pane">
              <ProofOfWork />
            </div>
          )}

          {activeTab === "casestudy" && (
            <div className="hub-tab-pane">
              <CaseStudy />
            </div>
          )}

          {activeTab === "break" && (
            <div className="hub-tab-pane">
              <BreakMyProject />
            </div>
          )}

          {activeTab === "challenge" && (
            <div className="hub-tab-pane">
              <TechChallenge />
            </div>
          )}

          {activeTab === "qa" && (
            <div className="hub-tab-pane">
              <ProjectQA />
            </div>
          )}

          {activeTab === "why" && (
            <div className="hub-tab-pane">
              <WhyInterviewMe
                onNavigateToSection={(targetId) => {
                  if (targetId === "proof-of-work") setActiveTab("proof");
                  else if (targetId === "case-study") setActiveTab("casestudy");
                  else if (targetId === "break-project") setActiveTab("break");
                  else onClose();
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
