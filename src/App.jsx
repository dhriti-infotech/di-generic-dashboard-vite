import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CodeDiff from "./components/CodeDiff/CodeDiff.jsx";
import PieChartDashboard from "./components/Dashboard/PieChartDashboard.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      <Header />

      <main style={{ padding: "24px" }}>
        {/* Tab Navigation */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <button
            className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => setActiveTab("tab1")}
          >
            Code Diff
          </button>
          <button
            className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => setActiveTab("tab2")}
          >
            Frequency Dashboard
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "tab1" && <CodeDiff/>}
          {activeTab === "tab2" && <PieChartDashboard/>}
        </div>
      </main>
    </div>
  );
}

export default App;
