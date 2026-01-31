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
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(rightColRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8");

    // Animate Language Bars
    barRefs.current.forEach((bar) => {
      if (bar) {
        gsap.fromTo(bar,
          { width: "0%" },
          {
            width: bar.dataset.width,
            duration: 3,
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

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left Column: Profile Card */}
        <div ref={leftColRef} className="md:col-span-1 flex flex-col items-center text-center space-y-6">
          <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-br from-accent-teal to-blue-600">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-card-bg">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co.com/DDZM6VBG/Media.jpg"
                alt="Mainul's portrait"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Md. Mainul Hossain Chisty</h3>
            <div className="flex justify-center gap-4 mt-4">
              <a href="mailto:mainul.hossain.chisty@g.bracu.ac.bd" className="p-2 bg-dark-bg rounded-lg text-text-secondary hover:text-accent-teal transition-colors">
                <FaEnvelope />
              </a>
              <a href="https://github.com/Mainul21" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-bg rounded-lg text-text-secondary hover:text-accent-teal transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mainulhossainchisty/" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-bg rounded-lg text-text-secondary hover:text-accent-teal transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div ref={rightColRef} className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-2 text-accent-teal font-bold tracking-widest text-sm uppercase">
            <span className="text-lg">✖</span> ABOUT
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            My <span className="text-accent-teal">Details</span>
          </h2>

          <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
            <p>
              I'm a dedicated Computer Science student at BRAC University, pursuing a Bachelor's degree. My passion lies in <span className="text-accent-teal">web development</span>, <span className="text-accent-teal">machine learning</span>, and <span className="text-accent-teal">competitive programming</span>.
            </p>
            <p>
              I specialize in <span className="text-accent-teal">Python</span>, with proficiency in <span className="text-accent-teal">Kotlin</span> and <span className="text-accent-teal">C</span> from my coursework. For web development, I leverage the <span className="text-accent-teal">MERN</span> stack to create dynamic, scalable applications.
            </p>
            <p>
              Always eager to learn new technologies and take on challenging projects that push my boundaries.
            </p>
          </div>

          {/* Languages Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Languages</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-text-secondary mb-1">
                  <span>Bengali</span>
                  <span>Native</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    ref={el => barRefs.current[0] = el}
                    data-width="100%"
                    className="bg-accent-teal h-2.5 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-text-secondary mb-1">
                  <span>English</span>
                  <span>Fluent</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    ref={el => barRefs.current[1] = el}
                    data-width="70%"
                    className="bg-accent-teal h-2.5 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Stats Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">GitHub Stats</h3>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=Mainul21&show_icons=true&theme=dark&hide_border=true" 
                alt="Mainul's GitHub Stats" 
                className="w-full"
              />
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mainul21&layout=compact&theme=dark&hide_border=true" 
                alt="Mainul's Top Languages" 
                className="w-full"
              />
            </div> */}
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Mainul21&theme=dark&hide_border=true&background=00000000"
              alt="Mainul's GitHub Streak"
              className="w-full"
            />
          </div>

          <div className="pt-4 border-t border-white/5">
            <p className="text-sm text-gray-500">
              📍 Location: Dhaka, Bangladesh
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MyDetails;