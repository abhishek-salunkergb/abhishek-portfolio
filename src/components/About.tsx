import "./styles/About.css";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { about } = portfolioData;

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{about.title}</h3>
        <p className="para">{about.bio}</p>
      </div>
    </div>
  );
};

export default About;
