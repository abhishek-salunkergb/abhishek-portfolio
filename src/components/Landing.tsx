import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";
import { MdFlashOn, MdDownload, MdArrowForward } from "react-icons/md";

interface LandingProps extends PropsWithChildren {
  onOpenRecruiter?: () => void;
}

const Landing = ({ children, onOpenRecruiter }: LandingProps) => {
  const { profile } = portfolioData;

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <div className="availability-badge">
              <span className="availability-dot"></span>
              <span className="availability-text">Available for Immediate Hire</span>
            </div>
            <h2>Hello! I'm</h2>
            <h1>
              {profile.firstName}
              <br />
              <span>{profile.lastName}</span>
            </h1>

            <div className="landing-cta-row">
              {onOpenRecruiter && (
                <button
                  type="button"
                  className="landing-recruiter-cta"
                  onClick={onOpenRecruiter}
                  data-cursor="disable"
                  title="Open 60-second executive recruiter view"
                >
                  <MdFlashOn className="cta-flash" />
                  <span>Recruiter Mode (60s)</span>
                </button>
              )}
              <a
                href="#recruiter-hub"
                className="landing-proof-cta nav-smooth-link"
                data-href="#recruiter-hub"
                data-cursor="disable"
              >
                <span>Proof of Work</span>
                <MdArrowForward className="cta-arrow" />
              </a>
              <a
                href={profile.socials.resume}
                download="Abhishek_Salunke_Resume.pdf"
                className="landing-resume-cta"
                data-cursor="disable"
              >
                <MdDownload />
                <span>Resume</span>
              </a>
            </div>
          </div>
          <div className="landing-info">
            <h3>Specializing in</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Python</div>
              <div className="landing-h2-2">AI & ML</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
