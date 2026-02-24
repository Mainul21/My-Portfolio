import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headingRef.current?.children || [], {
      y: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  const cardStyle = {
    background: "rgba(30, 41, 59, 0.7)",
    backdropFilter: "blur(20px)",
    color: "#e5e7eb",
    borderRadius: "16px",
    border: "1px solid rgba(148, 163, 184, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
  };

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 lg:px-20 relative">
      <div className="gradient-divider mb-20" />
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-12 space-y-4">
          <div className="section-label justify-center">
            CAREER
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Exper<span className="gradient-text">ience</span>
          </h1>
          <p className="text-text-secondary max-w-lg mx-auto">Professional journey and roles that shaped my skills</p>
        </div>

        <VerticalTimeline lineColor="rgba(99, 102, 241, 0.2)" animate={true}>

          {/* --- SELISE Associate SE Experience --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={cardStyle}
            contentArrowStyle={{ borderRight: "7px solid rgba(30, 41, 59, 0.7)" }}
            date="January 2026 - Present"
            dateClassName="text-text-secondary md:text-lg font-medium"
            iconStyle={{
              background: "#ffffff",
              color: "#fff",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.1)",
            }}
            icon={
              <img
                src="/Selise_logo.jpg"
                alt="SELISE Digital Platforms Logo"
                style={{
                  width: "80%",
                  height: "70%",
                  borderRadius: "5%",
                  objectFit: "contain",
                }}
              />
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse" />
              <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Current</span>
            </div>
            <h3 className="vertical-timeline-element-title text-xl font-bold text-white">
              Associate Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-base font-semibold text-accent-teal mt-1">
              SELISE Digital Platforms
            </h4>
            <p className="text-text-secondary mt-3">
              Working on internal platforms and client projects as an Associate Software Engineer.
            </p>
          </VerticalTimelineElement>

          {/* --- SELISE Internship Experience --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={cardStyle}
            contentArrowStyle={{ borderRight: "7px solid rgba(30, 41, 59, 0.7)" }}
            date="October 2025 - December 2025"
            dateClassName="text-text-secondary md:text-lg font-medium"
            iconStyle={{
              background: "#ffffff",
              color: "#fff",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(139, 92, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.1)",
            }}
            icon={
              <img
                src="/Selise_logo.jpg"
                alt="SELISE Digital Platforms Logo"
                style={{
                  width: "80%",
                  height: "70%",
                  borderRadius: "5%",
                  objectFit: "contain",
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-white">
              Intern Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-base font-semibold text-accent-violet mt-1">
              Finance and Legal, SELISE Digital Platforms
            </h4>
            <p className="text-text-secondary mt-3">
              Working on internal platforms and projects for the finance and Legal team using a low-code platform called{" Corteza"}
            </p>
          </VerticalTimelineElement>

          {/* --- City Bank Experience --- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={cardStyle}
            contentArrowStyle={{ borderRight: "7px solid rgba(30, 41, 59, 0.7)" }}
            date="February 2025 - May 2025"
            dateClassName="text-text-secondary md:text-lg font-medium"
            iconStyle={{
              background: "#3b82f6",
              color: "#fff",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.1)",
            }}
            icon={
              <img
                src="/City_Bank_Logo.png"
                alt="City Bank PLC Logo"
                style={{
                  width: "70%",
                  height: "70%",
                  borderRadius: "5%",
                  objectFit: "contain",
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-white">
              Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-base font-semibold text-blue-400 mt-1">
              Enterprise Architecture, IT, City Bank PLC
            </h4>
            <p className="text-text-secondary mt-3">
              Technical Documentation, Technical Drawing, User Manual Creation
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
