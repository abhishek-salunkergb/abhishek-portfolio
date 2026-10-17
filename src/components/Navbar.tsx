import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { portfolioData } from "../data/portfolioData";
import { MdFlashOn, MdDownload } from "react-icons/md";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

interface NavbarProps {
  onOpenRecruiter?: () => void;
}

const Navbar = ({ onOpenRecruiter }: NavbarProps) => {
  const { profile } = portfolioData;

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const setupSmoothLinks = () => {
      let links = document.querySelectorAll(".header ul a");
      links.forEach((elem) => {
        let element = elem as HTMLAnchorElement;
        element.addEventListener("click", (e) => {
          let section = element.getAttribute("data-href");
          if (section && section.startsWith("#")) {
            e.preventDefault();
            if (window.innerWidth > 1024 && smoother) {
              smoother.scrollTo(section, true, "top top");
            } else {
              const target = document.querySelector(section);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }
          }
        });
      });
    };

    setupSmoothLinks();

    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="/#" className="navbar-title" data-cursor="disable">
            AS.
          </a>
          {onOpenRecruiter && (
            <button
              type="button"
              className="navbar-recruiter-btn"
              onClick={onOpenRecruiter}
              data-cursor="disable"
              title="Open 60-second recruiter executive view"
            >
              <MdFlashOn className="nav-flash-icon" />
              <span>Recruiter Hub (60s)</span>
            </button>
          )}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {profile.email}
        </a>

        <div className="header-right">
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#recruiter-hub" href="#recruiter-hub">
                <HoverLinks text="EVIDENCE" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>

          <a
            href={profile.socials.resume}
            download="Abhishek_Salunke_Resume.pdf"
            className="navbar-resume-link"
            data-cursor="disable"
            title="Download PDF Resume"
          >
            <MdDownload className="nav-resume-icon" />
            <span>Resume</span>
          </a>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
