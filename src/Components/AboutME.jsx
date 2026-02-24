import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { gsap } from "gsap";
import Typewriter from "react-ts-typewriter";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

const AboutME = ({ scroll }) => {
  const containerRef = useRef();
  const textRef = useRef();
  const imgRef = useRef();
  const nameRef = useRef();
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate name lines (no split-text, just animate the heading blocks)
    if (nameRef.current) {
      tl.from(nameRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

    tl.from(textRef.current?.children || [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    }, "-=0.3")
      .from(imgRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-[85vh] flex items-center justify-center py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Ambient glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-600/[0.07] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-7">
          <div ref={nameRef} className="space-y-2">
            <div className="section-label mb-6">
              Full-Stack Developer
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Md. Mainul
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight gradient-text">
              Hossain Chisty
            </h1>
          </div>

          <div ref={textRef} className="space-y-6">
            <div className="text-lg md:text-xl text-text-secondary max-w-lg font-light">
              <span className="text-accent-teal font-mono text-sm mr-2">&gt;</span>
              <Typewriter
                loop={true}
                delay={2000}
                speed={50}
                text={[
                  "Building digital experiences.",
                  "Solving complex problems.",
                  "Loving code & coffee.",
                ]}
              />
            </div>

            <p className="text-text-secondary max-w-md leading-relaxed">
              I create scalable, high-performance web applications using modern technologies. Let's build something amazing together.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://drive.google.com/file/d/1Df_jzrI5cNmmv3F91Lz7FuqvUzyvqCBm/view?usp=sharing"
                download="MAINUL_HOSSAIN_CHISTY_Resume.pdf"
                className="magnetic-btn group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent-indigo to-accent-teal text-white font-semibold px-8 py-3.5 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/25"
              >
                <LiaFileDownloadSolid className="text-xl group-hover:animate-bounce" />
                <span className="relative z-10">Download CV</span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Mainul21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-indigo/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mainulhossainchisty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-indigo/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image / Illustration */}
        <div ref={imgRef} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square">
            {/* Floating particles */}
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full animate-float"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  background: p.id % 2 === 0
                    ? 'rgba(99, 102, 241, 0.5)'
                    : 'rgba(34, 211, 238, 0.4)',
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                  opacity: p.opacity,
                  filter: 'blur(0.5px)',
                }}
              />
            ))}

            {/* Gradient ring behind portrait */}
            <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-accent-indigo/20 via-transparent to-accent-teal/20 animate-[spin_20s_linear_infinite] blur-xl" />

            {/* Portrait */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-indigo-500/10">
              <img
                className="w-full h-full object-contain"
                src="https://i.ibb.co.com/Z6ryGzYk/formal-photo-removebg-preview.png"
                alt="Mainul's portrait"
              />
            </div>

            {/* Floating tech badges */}
            <div className="absolute top-8 right-4 w-16 h-16 glass-card rounded-xl flex items-center justify-center animate-float shadow-lg shadow-indigo-500/10">
              <span className="text-lg font-bold text-yellow-300">JS</span>
            </div>
            <div className="absolute bottom-24 -left-4 w-20 h-14 glass-card rounded-xl flex items-center justify-center animate-float-delay shadow-lg shadow-cyan-500/10">
              <span className="text-lg font-bold text-cyan-400">React</span>
            </div>
            <div className="absolute top-1/2 -right-6 w-14 h-14 glass-card rounded-xl flex items-center justify-center animate-float-slow shadow-lg shadow-violet-500/10">
              <span className="text-sm font-bold text-violet-400">Py</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutME;