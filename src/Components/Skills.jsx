import { useGSAP } from "@gsap/react";
import { useRef } from "react";
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

  const skills = [
    { name: "Python", icon: <FaPython className="text-[#3776AB]" />, color: "border-[#3776AB]" },
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, color: "border-[#E34F26]" },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, color: "border-[#1572B6]" },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, color: "border-[#F7DF1E]" },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" />, color: "border-[#61DAFB]" },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, color: "border-[#47A248]" },
    { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF]" />, color: "border-[#7F52FF]" },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, color: "border-[#339933]" },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, color: "border-[#FFCA28]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, color: "border-[#06B6D4]" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, color: "border-[#4169E1]" },
    { name: "GitHub", icon: <FaGithub className="text-white" />, color: "border-white" },
  ];

  useGSAP(() => {
    gsap.fromTo(cardsRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 lg:px-20 bg-dark-bg border-b border-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-accent-teal font-bold tracking-widest text-sm uppercase">
            <span className="text-lg">✖</span> SKILLS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            My Tech <span className="text-accent-teal">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`bg-card-bg p-6 rounded-xl border border-transparent hover:border-opacity-50 ${skill.color} hover:shadow-lg hover:shadow-accent-teal/10 transition-all duration-300 group flex flex-col items-center justify-center gap-4`}
            >
              <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
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