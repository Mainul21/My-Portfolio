import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";
import { gsap } from "gsap";
import Typewriter from "react-ts-typewriter";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const AboutME = ({ scroll }) => {
  const containerRef = useRef();
  const textRef = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(textRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    })
    .from(imgRef.current, {
      x: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-[80vh] flex items-center justify-center py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-teal/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div ref={textRef} className="flex flex-col items-start space-y-6">
          <div className="flex items-center gap-2 text-accent-teal font-semibold tracking-widest text-sm uppercase">
            
            Full-Stack Developer
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Md. Mainul <br />
            <span className="text-gray-400">Hossain Chisty</span>
          </h1>

          <div className="text-lg md:text-xl text-text-secondary max-w-lg">
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

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://drive.google.com/file/d/1Df_jzrI5cNmmv3F91Lz7FuqvUzyvqCBm/view?usp=sharing"
              download="MAINUL_HOSSAIN_CHISTY_Resume.pdf"
              className="btn btn-outline border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-dark-bg hover:border-accent-teal rounded-none px-8 uppercase tracking-wider text-sm font-bold transition-all duration-300 flex items-center gap-2"
            >
              <LiaFileDownloadSolid className="text-xl" />
              Download CV
            </a>
            
            
          </div>
        </div>

        {/* Image/Illustration */}
        <div ref={imgRef} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square">
            {/* Placeholder for 3D illustration or user image with effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/20 to-transparent rounded-full blur-3xl"></div>
            <img
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              src="https://i.ibb.co.com/Z6ryGzYk/formal-photo-removebg-preview.png"
              alt="Mainul's portrait"
            />
            {/* Floating elements decoration */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-card-bg rounded-xl shadow-xl flex items-center justify-center border border-white/10 animate-bounce delay-100">
              <span className="text-2xl font-bold text-accent-teal">JS</span>
            </div>
            <div className="absolute bottom-20 left-0 w-20 h-14 bg-card-bg rounded-xl shadow-xl flex items-center justify-center border border-white/10 animate-pulse delay-700">
              <span className="text-xl font-bold text-blue-400">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutME;