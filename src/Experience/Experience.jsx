// components/Experience.jsx
import React from "react";
import styled from "styled-components";

const experiences = [
  {
    date: "May 2025 — Present",
    role: "Cloud Engineer · UpholicTech",
    subtitle: "AWS & DevOps Engineer",
    description:
      "Design, deploy and maintain scalable and secure AWS infrastructures. Led CI/CD automation with GitHub Actions, Jenkins and Docker. Worked cross-functionally with product and infra teams.",
    tags: ["AWS", "Docker", "Jenkins","Terraform","Trivy","SonarQube","Grafana" ,"GitHub Actions"]
  }
 
];

export default function Experience() {
  return (
    <Wrapper>
           <section id="experience" />
        

      <h2 className="section-title">Experience</h2>
      {experiences.map((exp, idx) => (
        <div className="exp-card" key={idx}>
       
          <p className="date-range">{exp.date}</p>
          <h3 className="exp-title">{exp.role}</h3>
          <p className="subtitle">{exp.subtitle}</p>
          <p className="desc">{exp.description}</p>
          <div className="tags">
            {exp.tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #000;
  color: #e0e0ff;

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: lavender;
  }

  .exp-card {
    margin-bottom: 3rem;
    padding: 2rem;
    background: #0a0a23;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
  }

  .date-range {
    font-size: 0.9rem;
    color: #8888aa;
    margin-bottom: 0.5rem;
  }

  .exp-title {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 0.25rem;
  }

  .subtitle {
    color: #a6a6f0;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .desc {
    font-size: 1rem;
    color: #d0d0ff;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: #1f1f3b;
    padding: 0.4rem 0.8rem;
    border-radius: 0.6rem;
    color: #a8e0ff;
    font-size: 0.85rem;
    font-weight: 500;
  }
`;
