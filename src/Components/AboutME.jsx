import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { gsap } from "gsap";
import Typewriter from "react-ts-typewriter";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const AboutME = ({scroll}) => {
  const anime = useRef()
  useGSAP(()=>{
    gsap.to(anime.current,{
      filter: "drop-shadow(0 0 40px rgba(0, 191, 255, 0.8))",
      opacity:1,
      x:200,
      duration: 2,
      delay: 1
    })
  })
  return (
    <div className=" p-10 grid grid-cols-2 border-b">
      <div className=" p-10">
        <h1 className="text-5xl font-bold">
          HI! I AM <br />
          MD. MAINUL <br />
          HOSSAIN <br /> CHISTY
        </h1>
        <div className="mt-4 text-2xl font-bold">
          <h1>
            <Typewriter loop="true" delay={1000} text={["🖥️ Computer Science Student","👨‍💻 Tech Enthusiast","🌐 Interested in Web Development"]} />
          </h1>
        </div>
        <div>
          <a href="/public/Mainul Hossain (1).pdf" download="Mainul's Resume">
            <button className="btn text-black font-bold mt-4 bg-amber-500 hover:bg-blue-500">
              Download CV <LiaFileDownloadSolid className="font-bold" />
            </button>
          </a>
          <button onClick={scroll}  className="btn text-black font-bold mt-4 bg-blue-500 hover:bg-amber-500 ml-2">More About Me<FaArrowDown />
          </button>
        </div>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/mainulhossainchisty/"><button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4"><FaLinkedinIn></FaLinkedinIn></button></a>
          <a href="https://github.com/Mainul21"><button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4"><FaGithub/></button></a>
          <a href="https://www.instagram.com/mainul_irl?igsh=MWdlMHYzbXRqaHdhcA=="><button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4"><FaInstagram/></button></a>
        </div>
      </div>
      <div className="px-10 ">
        <img className="opacity-0" ref={anime} height={500} width={300} src="https://i.ibb.co.com/sqDYKQ0/20220420072822-IMG-9177-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default AboutME;
