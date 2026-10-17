import { useEffect, useState } from "react";
import { portfolioData, RoleCategory } from "../../data/portfolioData";
import { MdCheck, MdFilterList, MdShare } from "react-icons/md";
import "./styles/RoleSwitcher.css";

interface RoleSwitcherProps {
  activeRoleId: string;
  onSelectRole: (roleId: string) => void;
}

export const RoleSwitcher = ({ activeRoleId, onSelectRole }: RoleSwitcherProps) => {
  const { roleCategories } = portfolioData;
  const [copiedLink, setCopiedLink] = useState(false);

  const activeCategory: RoleCategory =
    roleCategories.find((cat) => cat.id === activeRoleId) || roleCategories[0];

  useEffect(() => {
    // Check initial pathname or search param
    const path = window.location.pathname.toLowerCase();
    if (path.includes("python")) {
      onSelectRole("python");
    } else if (path.includes("genai")) {
      onSelectRole("genai");
    } else if (path.includes("aiml") || path.includes("ai-ml") || path.includes("ml")) {
      onSelectRole("aiml");
    }
  }, [onSelectRole]);

  const handleRoleClick = (role: RoleCategory) => {
    onSelectRole(role.id);
    const newPath = role.slug ? `/portfolio/${role.slug}` : "/";
    window.history.pushState({ role: role.id }, "", newPath);
  };

  const handleCopyRoleLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="role-switcher-container" id="role-positioning">
      <div className="role-switcher-header">
        <div className="role-switcher-title">
          <MdFilterList className="filter-icon" />
          <span>Tailor Portfolio for Specific Job Category:</span>
        </div>
        <button
          type="button"
          className="copy-role-url-btn"
          onClick={handleCopyRoleLink}
          title="Share direct link to this role configuration"
        >
          {copiedLink ? <MdCheck /> : <MdShare />}
          <span>{copiedLink ? "Role Link Copied!" : "Copy Role URL"}</span>
        </button>
      </div>

      <div className="role-pills-row">
        {roleCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`role-pill-btn ${activeRoleId === cat.id ? "active" : ""}`}
            onClick={() => handleRoleClick(cat)}
            data-cursor="disable"
          >
            {cat.id === "python" && "🐍 "}
            {cat.id === "genai" && "🤖 "}
            {cat.id === "aiml" && "📊 "}
            {cat.id === "all" && "⚡ "}
            {cat.title}
          </button>
        ))}
      </div>

      <div className="role-positioning-banner">
        <div className="role-badge-line">
          <span className="role-badge">{activeCategory.badge}</span>
          <span className="role-tagline">{activeCategory.tagline}</span>
        </div>
        <p className="role-summary-text">{activeCategory.positioningSummary}</p>
        <div className="role-skills-tags">
          <span className="skills-label">Prioritized Stack:</span>
          {activeCategory.skillsHighlight.map((skill, idx) => (
            <span className="role-skill-pill" key={idx}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
