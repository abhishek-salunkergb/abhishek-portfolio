import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioData } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
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
