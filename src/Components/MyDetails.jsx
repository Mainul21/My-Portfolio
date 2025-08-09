import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {  useRef } from "react";
import { IoManSharp } from "react-icons/io5";
import { ScrollTrigger } from "gsap/ScrollTrigger";  

gsap.registerPlugin(ScrollTrigger) 

const MyDetails = () => {

  const textref = useRef(null)
  const imgRef = useRef(null)
    useGSAP(()=>{
      gsap.from(textref.current,{
        y:-50,
        opacity:0,
        duration: 2,
        delay: 2,
        scrollTrigger:{
          trigger:textref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"

        }
      })
      gsap.to(imgRef.current,{
        rotateY: 360,
        duration: 2,
        delay: 2,
        scrollTrigger:{
          trigger:imgRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"

        }
      })
    })


  return (
    <div className="lg:p-10 p-5 lg:border-b w-full flex flex-col items-center justify-center border-b">
      <h1 className="md:text-5xl text-3xl font-bold text-center flex items-center justify-center">
        <IoManSharp /> About <span className="text-amber-500"> Me</span>
      </h1>
      <div className="lg:grid lg:grid-cols-2">
        <div className="lg:p-10 p-4 flex items-center justify-center">
          <img
            className="rounded-xl"
            ref={imgRef}
            height={250}
            width={300}
            src="https://i.ibb.co.com/nwJPMqh/Mainul.jpg"
            alt=""
          />
        </div>
        <div ref={textref} className="lg:p-10 ">
          <h1 className="font-bold text-4xl mb-3 text-white">Hi! I am Mainul</h1>
          <h1 className="text-2xl mb-5">Computer Science Student | Web Developer</h1>
          <p className="text-xl mb-3 text-justify">
            I am a Computer Science student pursuing a Bachelor's degree at BRAC University. My primary interests lie in <span className="text-white hover:text-blue-500">web development</span>, <span className="text-white hover:text-blue-500">machine learning</span>, and <span className="text-white hover:text-blue-500">competitive programming</span>. I specialize in <span className="text-white hover:text-blue-500">Python</span> as my primary programming language, with additional proficiency in <span className="text-white hover:text-blue-500">Kotlin</span> and <span className="text-white hover:text-blue-500">C</span> from university coursework. For web development, I leverage the <span className="text-white hover:text-blue-500">MERN</span> stack to build robust and dynamic applications.
          </p>
          <h1 className="text-xl text-amber-500 hover:text-blue-500">Location: Dhaka, Bangladesh</h1>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
