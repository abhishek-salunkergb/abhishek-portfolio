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
import { RecruiterHubModal, HubTabId } from "./recruiter/RecruiterHubModal";
import { RecruiterShowcase } from "./recruiter/RecruiterShowcase";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [hubModalOpen, setHubModalOpen] = useState<boolean>(false);
  const [hubInitialTab, setHubInitialTab] = useState<HubTabId>("60s");
  const [activeRoleId, setActiveRoleId] = useState<string>("all");

  const openHub = (tab: HubTabId = "60s") => {
    setHubInitialTab(tab);
    setHubModalOpen(true);
  };

  useEffect(() => {
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setIsDesktopView(window.innerWidth > 1024);
        setSplitText();
      }, 150);
    };

    setSplitText();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar onOpenRecruiter={() => openHub("60s")} />
      <SocialIcons />
      <RecruiterHubModal
        isOpen={hubModalOpen}
        onClose={() => setHubModalOpen(false)}
        initialTab={hubInitialTab}
        activeRoleId={activeRoleId}
        onSelectRole={setActiveRoleId}
      />

      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing onOpenRecruiter={() => openHub("60s")}>
              {!isDesktopView && children}
            </Landing>
            <About />
            <WhatIDo />
            <Career />
            <RecruiterShowcase onOpenTab={(tab) => openHub(tab)} />
            <Work activeRoleId={activeRoleId} />
            {isDesktopView && (
              <Suspense
                fallback={
                  <div style={{ height: "100vh", width: "100%" }} />
                }
              >
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
