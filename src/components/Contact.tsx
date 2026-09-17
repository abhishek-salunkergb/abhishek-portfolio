import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdContentCopy, MdCheck } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <div className="contact-email-row">
              <p>
                <a href={`mailto:${profile.email}`} data-cursor="disable">
                  {profile.email}
                </a>
              </p>
              <button
                type="button"
                className={`copy-email-btn ${copied ? "copied" : ""}`}
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <MdCheck className="copy-icon" /> Copied!
                  </>
                ) : (
                  <>
                    <MdContentCopy className="copy-icon" /> Copy
                  </>
                )}
              </button>
            </div>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} data-cursor="disable">
                {profile.phone}
              </a>
            </p>
            <h4>Location</h4>
            <p className="contact-location" style={{ color: "#bbb", fontSize: "14px", marginTop: "4px" }}>
              {profile.location}
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={`mailto:${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email Directly <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{profile.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
