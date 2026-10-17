import { useState } from "react";
import { portfolioData, StressTestScenario } from "../../data/portfolioData";
import {
  MdScience,
  MdPlayArrow,
  MdCheckCircle,
  MdWarning,
  MdTerminal,
  MdCode,
} from "react-icons/md";
import "./styles/BreakMyProject.css";

export const BreakMyProject = () => {
  const { stressTests } = portfolioData;
  const [activeScenarioId, setActiveScenarioId] = useState<string>(stressTests[0].id);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>(stressTests[0].consoleSimulation);

  const activeScenario: StressTestScenario =
    stressTests.find((s) => s.id === activeScenarioId) || stressTests[0];

  const handleSelectScenario = (scenario: StressTestScenario) => {
    setActiveScenarioId(scenario.id);
    setConsoleLogs(scenario.consoleSimulation);
    setIsRunning(false);
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setConsoleLogs([]);
    const fullLogs = activeScenario.consoleSimulation;

    fullLogs.forEach((log, index) => {
      setTimeout(() => {
        setConsoleLogs((prev) => [...prev, log]);
        if (index === fullLogs.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <div className="break-section section-container" id="break-project">
      <div className="break-container">
        <div className="section-header-row">
          <div className="section-subtitle">
            <MdScience className="science-icon" /> RESILIENCE & CHAOS TESTBENCH
          </div>
          <h2 className="section-main-title">
            Try to <span>Break My Project</span>
          </h2>
          <p className="section-description">
            Standard candidate portfolios only show what happens when everything goes right.
            Senior hiring managers look for how systems respond when things go wrong: LLM rate limits,
            broken sockets, malicious injections, and database crashes. Select a chaos scenario below to inspect my error handling:
          </p>
        </div>

        {/* Chaos Scenario Selector */}
        <div className="chaos-selector-grid">
          {stressTests.map((scenario) => {
            const isSelected = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                type="button"
                className={`chaos-card-btn ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelectScenario(scenario)}
              >
                <div className="chaos-btn-top">
                  <span className="chaos-badge">
                    <MdWarning className="warn-icon" /> FAULT SIMULATION
                  </span>
                  <span className="chaos-exception-name">{scenario.errorType}</span>
                </div>
                <h4>{scenario.title}</h4>
                <p>{scenario.description}</p>
                <div className="chaos-click-hint">
                  {isSelected ? "Active Scenario" : "Click to Test Resilience ➔"}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Simulation Output & Code Inspector */}
        <div className="resilience-inspector-box">
          <div className="resilience-header">
            <div className="resilience-title">
              <span className="resilience-pulse"></span>
              <strong>Active Fault:</strong> {activeScenario.title}
            </div>
            <button
              type="button"
              className={`run-sim-btn ${isRunning ? "running" : ""}`}
              onClick={handleRunSimulation}
              disabled={isRunning}
            >
              <MdPlayArrow /> {isRunning ? "Injecting Fault..." : "Re-Run Chaos Injection"}
            </button>
          </div>

          <div className="resilience-grid">
            {/* Terminal Simulation */}
            <div className="terminal-panel">
              <div className="panel-tab-title">
                <MdTerminal /> Server Diagnostic Console (Async Execution)
              </div>
              <div className="terminal-screen">
                <div className="terminal-topbar">
                  <span className="term-dot red"></span>
                  <span className="term-dot yellow"></span>
                  <span className="term-dot green"></span>
                  <span className="term-title">python-worker-01 ~ stdout / stderr</span>
                </div>
                <div className="terminal-body">
                  {consoleLogs.map((log, idx) => {
                    let logClass = "log-info";
                    if (log.includes("[WARN]")) logClass = "log-warn";
                    if (log.includes("[ERROR]") || log.includes("[CATCH]")) logClass = "log-error";
                    if (log.includes("[SUCCESS]")) logClass = "log-success";
                    if (log.includes("[BACKOFF]") || log.includes("[CIRCUIT BREAKER]")) logClass = "log-highlight";
                    return (
                      <div key={idx} className={`term-log-line ${logClass}`}>
                        {log}
                      </div>
                    );
                  })}
                  {isRunning && (
                    <div className="term-log-line log-cursor">
                      <span>_</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="terminal-footer">
                <MdCheckCircle className="check-icon" />
                <span>Behavior: {activeScenario.behavior}</span>
              </div>
            </div>

            {/* Code Snippet Inspector */}
            <div className="code-panel">
              <div className="panel-tab-title">
                <MdCode /> Defensive Python Handler Implementation
              </div>
              <div className="code-screen">
                <pre>
                  <code>{activeScenario.codeSnippet}</code>
                </pre>
              </div>
              <div className="code-footer">
                <span>Production Python with type annotations and deterministic fault recovery.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
