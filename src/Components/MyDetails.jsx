import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { IoManSharp } from "react-icons/io5";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyDetails = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(imgRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 85%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section className=" py-16 px-6 md:px-12 lg:px-20 border-b border-gray-800 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12 flex items-center justify-center gap-2">
          <IoManSharp className="text-amber-400" /> About{" "}
          <span className="text-amber-400">Me</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              ref={imgRef}
              className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              height={350}
              width={400}
              src="https://i.ibb.co.com/nwJPMqh/Mainul.jpg"
              alt="Mainul's portrait"
            />
          </div>
          <div ref={textRef} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hi! I'm <span className="text-amber-400">Mainul</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
              Computer Science Student | Web Developer
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed text-justify">
              I'm a dedicated Computer Science student at BRAC University, pursuing a Bachelor's degree. My passion lies in{" "}
              <span className="text-amber-400 hover:text-amber-300 transition-colors">web development</span>,{" "}
              <span className="text-amber-400 hover:text-amber-300 transition-colors">machine learning</span>, and{" "}
              <span className="text-amber-400 hover:text-amber-300 transition-colors">competitive programming</span>. 
              I specialize in <span className="text-amber-400 hover:text-amber-300 transition-colors">Python</span>, with proficiency in{" "}
              <span className="text-amber-400 hover:text-amber-300 transition-colors">Kotlin</span> and{" "}
              <span className="text-amber-400 hover:text-amber-300 transition-colors">C</span> from my coursework. 
              For web development, I leverage the <span className="text-amber-400 hover:text-amber-300 transition-colors">MERN</span> stack to create dynamic, scalable applications.
            </p>
            <p className="text-lg text-amber-400 font-medium">
              📍 Location: Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDetails;