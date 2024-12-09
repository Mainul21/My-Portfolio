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
    <div className="p-10 border-b">
      <h1 className="text-5xl font-bold text-center items-center justify-center flex">
        <IoManSharp /> About <span className="text-amber-500"> Me</span>
      </h1>
      <div className="grid grid-cols-2">
        <div className="p-10">
          <img
            className="rounded-xl"
            ref={imgRef}
            height={250}
            width={300}
            src="https://i.ibb.co.com/nwJPMqh/Mainul.jpg"
            alt=""
          />
        </div>
        <div ref={textref} className="p-10 top-">
          <h1 className="font-bold text-4xl mb-3">Hi! I am Mainul</h1>
          <h1 className="text-2xl mb-5">Computer Science Student | Web Developer</h1>
          <p className="text-xl mb-3 text-justify">I am a Computer Science Student Pursuing Bachelors degree from BRAC University. I am interested in <span className="text-white hover:text-blue-500">web development</span>, <span className="text-white hover:text-blue-500">machine learning</span> and <span className="text-white hover:text-blue-500">competitive Programming</span>. My main programming language is <span className="text-white hover:text-blue-500">Python</span>. I also learned basic <span className="text-white hover:text-blue-500">Kotlin</span> and <span className="text-white hover:text-blue-500">C programming</span> for university courses although I am most comfortable with Python. I use <span className="text-white hover:text-blue-500">MERN</span> stack for web devlopment. </p>
          <h1 className="text-xl text-amber-500 hover:text-blue-500">Location: Dhaka, Bangladesh</h1>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
