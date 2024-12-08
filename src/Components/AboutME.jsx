import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import AvatarEditor from 'react-avatar-editor'
import Typewriter from "react-ts-typewriter";

const AboutME = () => {
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
        </div>
        <div className="mt-4">
          <button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4"><FaLinkedinIn></FaLinkedinIn></button>
          <button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4"><FaGithub/></button>
          <button className="btn bg-zinc-400 text-black hover:text-white mr-2 p-4"><FaInstagram/></button>
        </div>
      </div>
      <div className="px-10 ">
        <img height={500} width={300} src="/src/assets/images/20220420072822_IMG_9177-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default AboutME;
