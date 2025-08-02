// import { useEffect } from "react";
// import gsap from "gsap";

// export default function Background() {
//   useEffect(() => {
//     const silk = document.querySelector(".silk-background");
//     const about = document.querySelector(".about-me-section");

//     if (!about || !silk) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const isVisible = entry.isIntersecting;

//         // Fade body background
//         gsap.to(document.body, {
//           backgroundColor: isVisible ? "#000000" : "#ffffff",
//           duration: 1,
//           ease: "power2.out",
//         });

//         // Fade silk
//         gsap.to(silk, {
//           opacity: isVisible ? 0 : 1,
//           duration: 1,
//           ease: "power2.out",
//         });
//       },
//       { threshold: 0.4 }
//     );

//     observer.observe(about);

//     return () => observer.disconnect();
//   }, []);

//   return null;
// }


// import { useEffect } from "react";
// import gsap from "gsap";

// export default function Background() {
//   useEffect(() => {
//     const about = document.querySelector(".about-me-section");
//     const silk  = document.querySelector(".silk-background");
//     if (!about || !silk) return;

//     const goDark = () => {
//       gsap.to(document.body, {
//         backgroundColor: "#000000",
//         color: "#ffffff",
//         duration: 1,
//         ease: "power2.out",
//       });
//       // Hide silk ONCE so black body shows through
//       gsap.set(silk, { opacity: 0, pointerEvents: "none" });
//     };

//     // If already ≥ 40% visible on mount, lock immediately
//     const rect = about.getBoundingClientRect();
//     const vh = window.innerHeight || document.documentElement.clientHeight;
//     const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
//     const ratio = Math.min(1, Math.max(0, visible / Math.min(vh, rect.height || 1)));
//     if (ratio >= 0.4) {
//       goDark();
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry], obs) => {
//         if ((entry.intersectionRatio || 0) >= 0.4) {
//           goDark();
//           obs.disconnect(); // don't ever revert
//         }
//       },
//       { threshold: Array.from({ length: 21 }, (_, i) => i / 20) } // 0..1 step .05
//     );

//     observer.observe(about);
//     return () => observer.disconnect();
//   }, []);

//   return null;
// }


import { useEffect } from "react";
import gsap from "gsap";

export default function Background() {
  useEffect(() => {
    const about = document.querySelector(".about-me-section");
    const silk  = document.querySelector(".silk-background");
    if (!about || !silk) return;

    // Switch on at >= ON_T, switch off at <= OFF_T (hysteresis)
    const ON_T  = 0.42;
    const OFF_T = 0.38;

    let isDark = null; // unknown initially

    const toDark = () => {
      if (isDark === true) return;
      isDark = true;
      gsap.to(document.body, {
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(silk, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => (silk.style.pointerEvents = "none"),
      });
    };

    const toLight = () => {
      if (isDark === false) return;
      isDark = false;
      gsap.to(document.body, {
        backgroundColor: "#050505ff",
        color: "#000000",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(silk, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onStart: () => (silk.style.pointerEvents = "none"),
      });
    };

    // Initial state on mount
    const init = () => {
      const rect = about.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
      const ratio = Math.min(1, Math.max(0, visible / Math.min(vh, rect.height || 1)));
      if (ratio >= ON_T) {
        gsap.set(document.body, { backgroundColor: "#000000", color: "#ffffff" });
        gsap.set(silk, { opacity: 0 });
        silk.style.pointerEvents = "none";
        isDark = true;
      } else {
        gsap.set(document.body, { backgroundColor: "#ffffff", color: "#000000" });
        gsap.set(silk, { opacity: 1 });
        silk.style.pointerEvents = "none";
        isDark = false;
      }
    };
    init();

    // Observe ratio and apply hysteresis
    const observer = new IntersectionObserver(
      ([entry]) => {
        const r = entry.intersectionRatio || 0;
        if (r >= ON_T) toDark();
        else if (r <= OFF_T) toLight();
        // between OFF_T and ON_T -> keep current state
      },
      {
        root: null,
        threshold: Array.from({ length: 41 }, (_, i) => i / 40), // 0, .025, ... 1
      }
    );

    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  return null;
}
