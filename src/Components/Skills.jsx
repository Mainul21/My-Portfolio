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
    <div className="p-10 border-b">
      <h1 className="text-5xl font-bold text-center ">
        Skills & <span className="text-amber-500">Abilities</span>
      </h1>
      <div className="p-10">
        <div className="border p-10 flex flex-row justify-evenly shadow-xl shadow-emerald-500">
          <div ref={(el) => (logo.current[0] = el)} className=" mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Python</span>
            <img
              src="https://img.icons8.com/color/48/000000/python--v1.png"
              alt=""
            />
          </div>
          <div ref={(el) => (logo.current[1] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>HTML</span>
            <img
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt=""
            />
          </div>
          <div ref={(el) => (logo.current[2] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>CSS</span>
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="" />
          </div>
          <div ref={(el) => (logo.current[3] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Javascript</span>
            <img
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt=""
            />
          </div>
          <div ref={(el) => (logo.current[4] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>React</span>
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              alt=""
            />
          </div>
          <div ref={(el) => (logo.current[5] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Mongodb</span>
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt=""
            />
          </div>
          <div ref={(el) => (logo.current[6] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Kotlin</span>
            <img
              src="https://img.icons8.com/color/48/000000/kotlin.png"
              alt=""
            />
          </div>
          <div ref={(el) => (logo.current[7] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>NodeJs</span>
            <img
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt=""
            />
          </div>
          <div ref={(el) => (logo.current[8] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Firebase</span>
            <img
              src="https://img.icons8.com/color/48/000000/firebase.png"
              alt=""
            />
          </div>
          <div ref={(el) => (logo.current[9] = el)} className="mr-3 mb-4 border p-4 rounded-xl flex flex-col-reverse items-center justify-center shadow-lg  shadow-emerald-500 hover:bg-blue-200 hover:text-black transition-colors duration-500">
            <span>Tailwind CSS</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
