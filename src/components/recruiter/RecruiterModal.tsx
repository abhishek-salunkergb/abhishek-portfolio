import { useEffect, useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { MdClose, MdContentCopy, MdCheck, MdArrowOutward, MdDownload, MdFlashOn } from "react-icons/md";
import "./styles/RecruiterModal.css";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal = ({ isOpen, onClose }: RecruiterModalProps) => {
  const { recruiterMode, profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(60);

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

  return (
    <div className="recruiter-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="recruiter-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="recruiter-modal-header">
          <div className="recruiter-header-badge">
            <MdFlashOn className="flash-icon" />
            <span>RECRUITER 60-SECOND EXECUTIVE VIEW</span>
          </div>
          <div className="recruiter-timer">
            <span className="timer-text">{secondsRemaining}s left</span>
            <div className="timer-bar">
              <div
                className="timer-fill"
                style={{ width: `${(secondsRemaining / 60) * 100}%` }}
              ></div>
            </div>
          </div>
          <button
            type="button"
            className="recruiter-close-btn"
            onClick={onClose}
            aria-label="Close Recruiter View"
          >
            <MdClose />
          </button>
        </div>

        <div className="recruiter-modal-body">
          {/* Candidate Snapshot */}
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
              <strong>Academic Background:</strong> {recruiterMode.academicAndCreds}
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
      </div>
    </div>
  );
};
