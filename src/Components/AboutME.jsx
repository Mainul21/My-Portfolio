import { LiaFileDownloadSolid } from "react-icons/lia";

const AboutME = () => {
  return (
    <div className=" p-10 grid grid-cols-2 border-b">
      <div className=" p-10">
        <h1 className="text-5xl font-bold">MD. MAINUL <br/>HOSSAIN <br /> CHISTY</h1>
        <div>
          <a href="/public/Mainul Hossain (1).pdf" download="Mainul's Resume"><button className="btn text-black font-bold mt-4 bg-amber-500 hover:bg-blue-500">Download CV <LiaFileDownloadSolid className="font-bold"/></button></a>
        </div>
      </div>
      <div className="px-10 py-4">
        <h1 className="text-center font-bold text-xl border-b w-1/2 mx-auto">About Me</h1>
        <p className="text-center justify-evenly">I am a Md. Mainul Hossain Chisty. I am from Dhaka Bangladesh. I am currently an undergrad student perusing my Bachelor's of Computer Science Degree from BRAC University </p>
      </div>

    </div>
  );
};

export default AboutME;