import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub
} from "react-icons/fa";
import {
  SiMongodb, SiKotlin, SiFirebase, SiTailwindcss, SiPostgresql
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const skills = [
    { name: "Python", icon: <FaPython />, color: "#3776AB", glow: "rgba(55, 118, 171, 0.3)" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", glow: "rgba(227, 79, 38, 0.3)" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", glow: "rgba(21, 114, 182, 0.3)" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.3)" },
    { name: "React", icon: <FaReact />, color: "#61DAFB", glow: "rgba(97, 218, 251, 0.3)" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", glow: "rgba(71, 162, 72, 0.3)" },
    { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF", glow: "rgba(127, 82, 255, 0.3)" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", glow: "rgba(51, 153, 51, 0.3)" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", glow: "rgba(255, 202, 40, 0.3)" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", glow: "rgba(6, 182, 212, 0.3)" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", glow: "rgba(65, 105, 225, 0.3)" },
    { name: "GitHub", icon: <FaGithub />, color: "#E2E8F0", glow: "rgba(226, 232, 240, 0.3)" },
  ];

  useGSAP(() => {
    gsap.fromTo(cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.85,
        rotateY: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateY: 0,
        duration: 0.7,
        stagger: {
          each: 0.08,
          from: "start",
        },
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  const handleCardMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // Move the glow
    const glowEl = card.querySelector('.card-glow');
    if (glowEl) {
      glowEl.style.left = `${x}px`;
      glowEl.style.top = `${y}px`;
      glowEl.style.opacity = '1';
    }
  };

  const handleCardMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    const glowEl = card.querySelector('.card-glow');
    if (glowEl) {
      glowEl.style.opacity = '0';
    }
    setHoveredCard(null);
  };

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 lg:px-20 relative">
      <div className="gradient-divider mb-20" />
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center gap-4">
          <div className="section-label">
            SKILLS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            My Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-text-secondary text-center max-w-lg">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              onMouseMove={(e) => {
                handleCardMouseMove(e, index);
                setHoveredCard(index);
              }}
              onMouseLeave={() => handleCardMouseLeave(index)}
              className="relative glass-card p-6 rounded-xl cursor-pointer group flex flex-col items-center justify-center gap-4 overflow-hidden transition-all duration-500"
              style={{
                transformStyle: 'preserve-3d',
                borderColor: hoveredCard === index ? `${skill.color}33` : 'rgba(148, 163, 184, 0.1)',
                boxShadow: hoveredCard === index ? `0 0 30px ${skill.glow}` : 'none',
              }}
            >
              {/* Cursor-following glow */}
              <div
                className="card-glow absolute w-40 h-40 rounded-full pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${skill.glow}, transparent 70%)`,
                  transform: 'translate(-50%, -50%)',
                  opacity: 0,
                }}
              />

              <div
                className="relative z-10 text-5xl transition-all duration-500 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="relative z-10 text-text-secondary font-medium group-hover:text-white transition-colors duration-300 text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;