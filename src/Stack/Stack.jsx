// components/MyStack.jsx
import React from "react";
import "./MyStack.css";

const stack = {
  "Cloud Platforms": ["aws", "ec2"],
  "Source Control & Platforms": ["github", "gitlab"],
  "CI/CD & GitOps": ["jenkins", "argo-cd"],
  "Containerization & Orchestration": ["docker", "kubernetes"],
  "IaC & Configuration": ["terraform", "ansible"],
  "Security & Quality": ["trivy", "sonarqube", "owasp"],
  "Monitoring": ["prometheus", "grafana"],
  "Messaging & Streaming": ["kafka"],
  "OS ,Scripting & Automation": ["bash", "python", "linux"]
};




export default function MyStack() {
  return (
    <section id = "skills" className="tech-stack-section">
      <h2 className="stack-title">Tech Stack</h2>
      <div className="stack-grid">
        {Object.entries(stack).map(([category, tools]) => (
          <div key={category} className="stack-category">
            <h3>{category}</h3>
            <div className="icon-row">
              {tools.map((tool) => (
                <img
                  key={tool}
                  src={`/Icons/${tool}.webp`}
                  alt={tool}
                  title={tool.toUpperCase()}
                  className="stack-icon"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



