import React from "react";
import SplitText from "./TextAnimations/SplitText/SplitText";
import "./Home.css";

export default function Home() {
  return (
   <div className="home-container">
  {/* LEFT: Text */}
  <div className="text-wrapper">
    <div className="hero-text-group">
      <SplitText text="Cloud." className="hero-text" delay={50} duration={1} ease="bounce.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} />
      <SplitText text="DevOps." className="hero-text" delay={50} duration={1} ease="bounce.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} />
      <SplitText text="Automation." className="hero-text" delay={50} duration={1} ease="bounce.out" splitType="words" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} />
    </div>
  </div>

  {/* RIGHT: Group everything inside right-wrapper */}
  <div className="right-wrapper">
    {/* Live AWS Architecture Diagram */}
    <div className="architecture-diagram">
      <img src="icons/arch2.png" alt="AWS Architecture" />
      <div className="blinker" style={{ top: "30%", left: "25%" }} />
      <div className="blinker" style={{ top: "60%", left: "55%" }} />
    </div>

    {/* Hire Me */}
    <div className="hire-me-card">
      <h3>🚀 Let's Work Together</h3>
      <p>I build scalable, automated, secure cloud systems.</p>
      <div className="buttons">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  </div>
</div>

  );
}
