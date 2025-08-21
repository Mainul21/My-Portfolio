import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { gsap } from "gsap";
import Typewriter from "react-ts-typewriter";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const AboutME = ({ scroll }) => {
  const animeRef = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    gsap.from(animeRef.current, {
      x: window.innerWidth > 1024 ? 200 : window.innerWidth > 768 ? 150 : 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.to(imgRef.current, {
      filter: "drop-shadow(0 0 40px rgba(0, 191, 255, 0.8))",
      opacity: 1,
      duration: 2,
      delay: 1,
    });
  });

  return (
    <section className="bg-gray-900 py-12 px-6 md:px-12 lg:px-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Hi! I'm <br />
            <span className="text-amber-400">Md. Mainul Hossain Chisty</span>
          </h1>
          <div className="text-lg md:text-xl font-semibold text-gray-300">
            <Typewriter
              loop={true}
              delay={2000}
              speed={50}
              text={[
                "🖥️ Computer Science Student",
                "👨‍💻 Tech Enthusiast",
                "🌐 Web Developer",
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/Mainul_Hossain_Chisty_Resume.pdf" download="Mainul's Resume">
              <button className="flex items-center justify-center gap-2 bg-amber-400 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-amber-500 transition-colors duration-300">
                Download CV <LiaFileDownloadSolid className="text-xl" />
              </button>
            </a>
            <button
              onClick={scroll}
              className="flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              About Me <FaArrowDown />
            </button>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/mainulhossainchisty/" target="_blank" rel="noopener noreferrer">
              <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300">
                <FaLinkedinIn className="text-xl" />
              </button>
            </a>
            <a href="https://github.com/Mainul21" target="_blank" rel="noopener noreferrer">
              <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300">
                <FaGithub className="text-xl" />
              </button>
            </a>
            <a href="https://www.instagram.com/mainul_irl?igsh=MWdlMHYzbXRqaHdhcA==" target="_blank" rel="noopener noreferrer">
              <button className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </button>
            </a>
          </div>
        </div>
        <div ref={animeRef} className="relative flex justify-center">
          <img
            ref={imgRef}
            className="rounded-2xl shadow-lg max-w-[150px] md:max-w-[250px] lg:max-w-[250px] object-cover opacity-0"
            src="https://i.ibb.co.com/sqDYKQ0/20220420072822-IMG-9177-removebg-preview.png"
            alt="Mainul's portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutME;