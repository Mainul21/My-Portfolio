import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { gsap } from "gsap";
import Typewriter from "react-ts-typewriter";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import countapi from "countapi-js";

const AboutME = ({ scroll }) => {
  const anime = useRef();
  const imgRef = useRef();
  useGSAP(() => {
    if (window.innerWidth > 1024){
      gsap.to(anime.current, {
        
        x: 200,
        duration: 2,
        delay: 1,
      });
      
    }
    if (window.innerWidth > 768){
      gsap.to(anime.current, {
        
        x: 150,
        duration: 2,
        delay: 1,
      });
      
    }
    gsap.to(imgRef.current, {
      filter: "drop-shadow(0 0 40px rgba(0, 191, 255, 0.8))",
      opacity:1,
      duration: 2,
      delay: 1,
    });
  });

  // useEffect(() => {
  //   countapi.visits("global")
  //   .then((result) => {
  //     console.log(result.value);
  //   })
  //   .catch((error)=>{console.log(error)})
  // }, []);
  return (
    <div className="w-full md:p-10 flex-row md:flex md:justify-between border-b ">
      <div className="md:p-10 p-5 md:flex md:flex-col flex flex-col items-center justify-start md:items-start md:justify-start">
        <h1 className="md:text-3xl lg:text-5xl text-2xl font-bold ml-12 md:ml-0">
          HI! I AM <br />
          MD. MAINUL <br />
          HOSSAIN CHISTY
        </h1>
        <div className="mt-4 md:text-[18px] text-sm font-bold">
          <h1 className="text-start">
            <Typewriter
              loop="true"
              delay={1000}
              text={[
                "🖥️ Computer Science Student",
                "👨‍💻 Tech Enthusiast",
                "🌐 Interested in Web Development",
              ]}
            />
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-start ">
          <a href="/Mainul_Hossain_Chisty_resume.pdf" download="Mainul's Resume">
            <button className="btn text-black font-bold mt-4 bg-amber-500 hover:bg-blue-500 w-[150px] lg:w-full">
              Download CV <LiaFileDownloadSolid className="font-bold" />
            </button>
          </a>
          <button
            onClick={scroll}
            className="btn text-black font-bold mt-4 bg-blue-500 hover:bg-amber-500 lg:ml-2 w-[150px]"
          >
            About Me
            <FaArrowDown />
          </button>
        </div>
        <div className="mt-4 flex justify-start">
          <a href="https://www.linkedin.com/in/mainulhossainchisty/">
            <button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4">
              <FaLinkedinIn></FaLinkedinIn>
            </button>
          </a>
          <a href="https://github.com/Mainul21">
            <button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4">
              <FaGithub />
            </button>
          </a>
          <a href="https://www.instagram.com/mainul_irl?igsh=MWdlMHYzbXRqaHdhcA==">
            <button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4">
              <FaInstagram />
            </button>
          </a>
        </div>
      </div>
      <div className="lg:mr-[300px] md:mr-[120px] lg:h-[500px] lg:w-[300px] md:h-[400px] md:w-[200px] h-[250px] w-[150px] md:mt-5 lg:mt-0 mx-auto" ref={anime}>
        <img
          className="opacity-0 "
          ref={imgRef}
          // height={500}
          // width={300}
          src="https://i.ibb.co.com/sqDYKQ0/20220420072822-IMG-9177-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutME;
