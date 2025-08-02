import React from "react";
import "./Aboutme.css";

export default function AboutMe() {
  return (
    <section id="home" className="about-me-section">
      <div className="about-me-content">
        {/* Left: Text */}
        <div className="about-text">
          <h1 className="intro-title">
            HELLO, <br />
            I AM <span className="highlight-name">Angat Singh Wasan</span>
          </h1>
          <p className="intro-description">
            🚀 Design and Deploy Scalable Architectures <br />
Proficient in architecting and deploying fault-tolerant, highly available applications on AWS using services like EC2, S3, VPC, ELB, Auto Scaling, and RDS. <br/>
           🔄 CI/CD Automation<br />
Build end-to-end CI/CD pipelines using tools like GitHub Actions, Jenkins, AWS CodePipeline, CodeDeploy, and Docker to automate testing, building, and deployments.<br />

🔐 Security & Compliance <br/>
Enforce best practices in IAM roles, VPC security groups, encryption (KMS), and audit logging with AWS CloudTrail and Config.
            I specialize in <strong>automation, infrastructure, and cloud engineering</strong>, delivering fast and secure solutions.
            <br /><br />
           Built for uptime. Engineered for scale. Powered by caffeine.
          </p>
        </div>

        {/* Right: Image */}
     <div className="button">
  <button
    className="resume-btn"
    onClick={() =>
      window.open("/Icons/ANGAT_RESUME.pdf", "_blank", "noopener,noreferrer")
    }
    aria-label="View Resume (opens in a new tab)"
  >
    View Resume <span aria-hidden>→</span>
  </button>
</div>

      </div>
    </section>
  );
}



// import React from 'react';
// import styled from 'styled-components';

// const Aboutme = () => {
//   return (
//     <StyledWrapper>
//       <div className="flip-card">
//         <div className="flip-card-inner">
//           <div className="flip-card-front">
//             <p className="title">AWS CLOUD</p>
//             <p>Infrastructure Engineer</p>
//           </div>
//           <div className="flip-card-back">
//             <p className="title">DevOps + CI/CD</p>
//             <p>Built for uptime. Engineered for scale.</p>
//           </div>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .flip-card {
//     background-color: transparent;
//     width: 230px;
//     height: 270px;
//     perspective: 1000px;
//     font-family: sans-serif;
//   }

//   .title {
//     font-size: 1.4em;
//     font-weight: 800;
//     text-align: center;
//     margin: 0;
//   }

//   .flip-card-inner {
//     position: relative;
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     transition: transform 0.8s;
//     transform-style: preserve-3d;
//   }

//   .flip-card:hover .flip-card-inner {
//     transform: rotateY(180deg);
//   }

//   .flip-card-front, .flip-card-back {
//     box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//     border: 1px solid coral;
//     border-radius: 1rem;
//     padding: 1rem;
//   }

//   .flip-card-front {
//     background: linear-gradient(120deg, #fdf6e3 60%, #ffe7de 88%, #ffd3c3 40%, rgba(255, 127, 80, 0.6) 48%);
//     color: coral;
//   }

//   .flip-card-back {
//     background: linear-gradient(120deg, #ffae91 30%, coral 88%, bisque 40%, #ffb9a0 78%);
//     color: white;
//     transform: rotateY(180deg);
//   }
// `;

// export default Aboutme;

