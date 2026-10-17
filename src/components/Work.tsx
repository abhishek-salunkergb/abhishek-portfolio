import { useMemo } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { portfolioData, ProjectItem } from "../data/portfolioData";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface WorkProps {
  activeRoleId?: string;
}

const Work = ({ activeRoleId }: WorkProps) => {
  const { projects, roleCategories } = portfolioData;

  const activeCategory = roleCategories.find((cat) => cat.id === activeRoleId);

  const displayedProjects: ProjectItem[] = useMemo(() => {
    return [...projects].sort((a, b) => {
      if (!activeCategory || !activeCategory.projectOrder) return 0;
      const idxA = activeCategory.projectOrder.indexOf(a.title);
      const idxB = activeCategory.projectOrder.indexOf(b.title);
      const scoreA = idxA === -1 ? 999 : idxA;
      const scoreB = idxB === -1 ? 999 : idxB;
      return scoreA - scoreB;
    });
  }, [projects, activeCategory]);

  useGSAP(() => {
    function getTranslateX() {
      const flex = document.querySelector(".work-flex") as HTMLElement;
      if (!flex) return 0;
      // Scroll width minus visible viewport plus trailing margin
      return Math.max(0, flex.scrollWidth - window.innerWidth + 120);
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill(true);
    };
  }, []); // Run ONCE on mount: never destroy pin spacer on re-renders!

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {displayedProjects.map((project, index) => (
            <div className="work-box" key={`${project.title}-${index}`}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
                <h4>Tools and features</h4>
                <p className="work-tools">{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                video={project.video}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
