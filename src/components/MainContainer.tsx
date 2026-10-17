import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { RecruiterModal } from "./recruiter/RecruiterModal";
import { RoleSwitcher } from "./recruiter/RoleSwitcher";
import { ProofOfWork } from "./recruiter/ProofOfWork";
import { CaseStudy } from "./recruiter/CaseStudy";
import { BreakMyProject } from "./recruiter/BreakMyProject";
import { ProjectQA } from "./recruiter/ProjectQA";
import { TechChallenge } from "./recruiter/TechChallenge";
import { WhyInterviewMe } from "./recruiter/WhyInterviewMe";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [recruiterModalOpen, setRecruiterModalOpen] = useState<boolean>(false);
  const [activeRoleId, setActiveRoleId] = useState<string>("all");

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar onOpenRecruiter={() => setRecruiterModalOpen(true)} />
      <SocialIcons />
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />

      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing onOpenRecruiter={() => setRecruiterModalOpen(true)}>
              {!isDesktopView && children}
            </Landing>
            <RoleSwitcher
              activeRoleId={activeRoleId}
              onSelectRole={setActiveRoleId}
            />
            <About />
            <WhatIDo />
            <Career />
            <ProofOfWork />
            <CaseStudy />
            <BreakMyProject />
            <TechChallenge />
            <ProjectQA />
            <WhyInterviewMe />
            <Work activeRoleId={activeRoleId} />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
