import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const Institute = ({ institute }) => {
  const { name, image, degree, Year, Result, location } = institute;
  const imgRef = useRef(null);
  const textRef = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      { x: 1000, opacity:0 },
      { x: 0, opacity:1, duration: 3, delay: 0.5}
    );
    gsap.to(textRef.current, {
      opacity:1,
      delay:1,
      duration:4
    })
  });

  return (
    <div>
      <div className="border p-4 rounded flex md:flex-row flex-col items-center justify-center md:justify-start shadow-xl shadow-emerald-500">
        <img ref={imgRef} className="w-[200px] h-[250px] md:h-[300px]" src={image} alt="" />
        <div className=" p-4 opacity-0 ml-5 space-y-3" ref={textRef}>
            <h1 className="md:text-5xl text-3xl font-bold">{name}</h1>
            <h1 className="md:text-xl text-lg mb-3">Location: {location}</h1>   
            <h1 className="md:text-2xl text-xl font-bold">{degree}</h1>
            <h1 className="font-bold">Result: {Result}</h1>
            <h1 className="font-bold">Year: {Year}</h1>
        </div>
      </div>
    </div>
  );
};

export default Institute;
