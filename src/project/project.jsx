import React, { useLayoutEffect, useRef } from "react";
import "./project.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
     {
    title: "UpholicTech",
    description:
      "UpholicTech is a heavy stock-based application that provides a platform for users to manage their stock portfolios effectively. It offers features like real-time stock tracking, portfolio management, and market analysis tools.",
    tools: "AWS, Docker,Terraform, Jenkins, Trivy, SonarQube, OWASP ZAP, Prometheus.",
    toolColor: "orange",
    image: "/icons/UpholicTech.jpeg",
    link: "https://www.upholictech.com"
  },
  {
    title: "Three-tier Microservice Architecture",
    description:
      "This project demonstrates a microservice architecture using Node.js, Python, React (Frontend), and MongoDB, all containerized with Docker and orchestrated with Docker Compose.",
    tools: "AWS, Docker, Jenkins, Terraform, React, Node.js, Express.js, Python, MongoDB",
    toolColor: "orange",
    image: "/images/tekture.png",
    link: "https://github.com/Angat13/Microservice-Architecture-DevOps"
  },
  {
    title: "Hospital Care Management System(CareCraft)",
    description:
      "CareCraft is a hospital-focused service platform designed to enhance the well-being of elderly patients admitted to the hospital.",
    tools: "AWS, Docker, Terraform, React, Node.js, Express.js, MongoDB",
    toolColor: "orange",
    image: "/images/asekio.png",
    link: "https://github.com/Angat13/CareCraft"
  }
];

export default function ProjectShowcase() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id = "projects" className="project-showcase">
      <div className="project-header">Top Projects</div>

      <div className="project-showcase-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="tools-used-label" style={{ color: project.toolColor }}>
                  Tools used
                </span>
                <span className="tools-used-value">{project.tools}</span>
              </div>
              <a href={project.link} className="read-case-link" target="_blank" rel="noreferrer">
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
