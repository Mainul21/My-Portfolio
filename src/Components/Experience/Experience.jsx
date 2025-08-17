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
  const timelineRef = useRef(null);

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(timelineRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.5,
      ease: "power3.out",
    });
  });

  return (
    <section className="bg-gray-900 py-12 px-6 md:px-12 lg:px-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-extrabold text-center text-white mb-12"
        >
          Exper<span className="text-amber-400">ience</span>
        </h1>
        <div ref={timelineRef}>
          <VerticalTimeline lineColor="#4b5563">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1f2937",
                color: "#e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
              date="February 2025 - Present"
              dateClassName="text-gray-300 md:text-lg"
              iconStyle={{
                background: "#3b82f6",
                color: "#fff",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
              }}
              icon={
                <img
                  src="/City_Bank_Logo.png" // Update with your actual logo path
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
              <h4 className="vertical-timeline-element-subtitle text-base font-semibold text-gray-300">
                Enterprise Architecture, IT, City Bank PLC
              </h4>
              <p className="text-gray-400">
                Technical Documentation, Technical Drawing, User Manual Creation
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;