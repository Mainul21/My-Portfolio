import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const MyDetails = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const barRefs = useRef([]);
  const profileCardRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(leftColRef.current, {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(rightColRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }, "-=0.6");

    // Animate Language Bars
    barRefs.current.forEach((bar) => {
      if (bar) {
        gsap.fromTo(bar,
          { width: "0%" },
          {
            width: bar.dataset.width,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            }
          }
        );
      }
    });
  }, { scope: containerRef });

  // 3D tilt effect on profile card
  const handleMouseMove = (e) => {
    const card = profileCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = profileCardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column: Profile Card */}
        <div
          ref={leftColRef}
          className="md:col-span-1 flex flex-col items-center text-center space-y-6"
        >
          <div
            ref={profileCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass-card p-8 rounded-2xl transition-transform duration-300 ease-out w-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-br from-accent-indigo to-accent-teal mb-6">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-card-bg">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.ibb.co.com/DDZM6VBG/Media.jpg"
                  alt="Mainul's portrait"
                />
              </div>
              {/* Status dot */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-card-bg animate-glow-pulse" />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Md. Mainul Hossain Chisty</h3>
            <p className="text-sm text-text-secondary mb-4">Full-Stack Developer</p>

            <div className="flex justify-center gap-3">
              <a href="mailto:mainul.hossain.chisty@g.bracu.ac.bd" className="w-10 h-10 rounded-lg bg-dark-bg/80 flex items-center justify-center text-text-secondary hover:text-accent-teal hover:bg-accent-teal/10 transition-all duration-300 hover:scale-110">
                <FaEnvelope />
              </a>
              <a href="https://github.com/Mainul21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-bg/80 flex items-center justify-center text-text-secondary hover:text-accent-indigo hover:bg-accent-indigo/10 transition-all duration-300 hover:scale-110">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mainulhossainchisty/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-bg/80 flex items-center justify-center text-text-secondary hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div ref={rightColRef} className="md:col-span-2 space-y-8">
          <div className="section-label">
            ABOUT
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            My <span className="gradient-text">Details</span>
          </h2>

          <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
            <p>
              I'm a dedicated Computer Science student at BRAC University, pursuing a Bachelor's degree. My passion lies in <span className="text-accent-teal font-medium">web development</span>, <span className="text-accent-indigo font-medium">machine learning</span>, and <span className="text-accent-violet font-medium">competitive programming</span>.
            </p>
            <p>
              I specialize in <span className="text-accent-teal font-medium">Python</span>, with proficiency in <span className="text-accent-indigo font-medium">Kotlin</span> and <span className="text-accent-violet font-medium">C</span> from my coursework. For web development, I leverage the <span className="gradient-text font-semibold">MERN</span> stack to create dynamic, scalable applications.
            </p>
            <p>
              Always eager to learn new technologies and take on challenging projects that push my boundaries.
            </p>
          </div>

          {/* Languages Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-text-secondary mb-2 text-sm font-medium">
                  <span>Bengali</span>
                  <span className="text-accent-teal">Native</span>
                </div>
                <div className="w-full bg-dark-bg/80 rounded-full h-2.5 overflow-hidden">
                  <div
                    ref={el => barRefs.current[0] = el}
                    data-width="100%"
                    className="h-2.5 rounded-full bg-gradient-to-r from-accent-indigo to-accent-teal shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-text-secondary mb-2 text-sm font-medium">
                  <span>English</span>
                  <span className="text-accent-teal">Fluent</span>
                </div>
                <div className="w-full bg-dark-bg/80 rounded-full h-2.5 overflow-hidden">
                  <div
                    ref={el => barRefs.current[1] = el}
                    data-width="70%"
                    className="h-2.5 rounded-full bg-gradient-to-r from-accent-indigo to-accent-teal shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Stats Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">GitHub Stats</h3>
            <div className="glass-card p-4 rounded-xl overflow-hidden">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Mainul21&theme=dark&hide_border=true&background=00000000&ring=6366f1&fire=22d3ee&currStreakLabel=22d3ee&sideLabels=94a3b8&dates=64748b"
                alt="Mainul's GitHub Streak"
                className="w-full"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <p className="text-sm text-text-secondary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse" />
              📍 Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDetails;