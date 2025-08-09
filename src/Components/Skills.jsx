import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {gsap} from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";  

gsap.registerPlugin(ScrollTrigger) 

const Skills = () => {

  const logo = useRef([])

  useGSAP(()=>{
    gsap.fromTo(logo.current,
      {
        opacity: 0, 
        scale: 0.5, 
        y: 20
      },
      {opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        scrollTrigger:{
          trigger:logo.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"

        }
      }
    )
  })

  return (
    <div className="md:p-10 border-b py-4">
      <h1 className="md:text-5xl text-3xl font-bold text-center ">
        Skills & <span className="text-amber-500">Abilities</span>
      </h1>
      <div className="md:p-10 py-4">
        <div className="border rounded-lg p-10 shadow-xl shadow-emerald-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div ref={(el) => (logo.current[0] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Python</span>
            <img
              src="https://img.icons8.com/color/48/000000/python--v1.png"
              alt="python logo"
            />
          </div>
          <div ref={(el) => (logo.current[1] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>HTML</span>
            <img
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt="html logo"
            />
          </div>
          <div ref={(el) => (logo.current[2] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>CSS</span>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css logo" />
          </div>
          <div ref={(el) => (logo.current[3] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Javascript</span>
            <img
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt="javascript logo"
            />
          </div>
          <div ref={(el) => (logo.current[4] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>React</span>
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              alt="react logo"
            />
          </div>
          <div ref={(el) => (logo.current[5] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Mongodb</span>
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="mongodb logo"
            />
          </div>
          <div ref={(el) => (logo.current[6] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Kotlin</span>
            <img
              src="https://img.icons8.com/color/48/000000/kotlin.png"
              alt="kotlin logo"
            />
          </div>
          <div ref={(el) => (logo.current[7] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>NodeJs</span>
            <img
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt="nodejs logo"
            />
          </div>
          <div ref={(el) => (logo.current[8] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Firebase</span>
            <img
              src="https://img.icons8.com/color/48/000000/firebase.png"
              alt="firebase logo"
            />
          </div>
          <div ref={(el) => (logo.current[9] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Tailwind CSS</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
              alt="tailwind CSS logo"
            />
          </div>
          <div ref={(el) => (logo.current[10] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>PostgreSQL</span>
            <img
              src="https://img.icons8.com/color/48/000000/postgreesql.png"
              alt="postgreSQL logo"
            />
          </div>
          <div ref={(el) => (logo.current[11] = el)} className="border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Github</span>
            <img
              src="https://img.icons8.com/glyph-neue/48/ffffff/github.png"
              alt="github logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;