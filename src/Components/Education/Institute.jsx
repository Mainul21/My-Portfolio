import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const Institute = ({ institute, isHovered }) => {
  const { name, image, degree, Year, Result, location } = institute;
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      { x: 1000, opacity: 0 },
      { x: 0, opacity: 1, duration: 3, delay: 0.5 }
    );
    gsap.to(textRef.current, {
      opacity: 1,
      delay: 1,
      duration: 4,
    });
    // Animate image size based on hover state
    gsap.to(imgRef.current, {
      width: isHovered ? 192 : 128, // Larger size (48px bigger) when hovered
      height: isHovered ? 192 : 128,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [isHovered]);

  return (
    <div className="border p-4 rounded-lg flex flex-col items-center justify-between h-full shadow-xl shadow-emerald-500">
      <img
        ref={imgRef}
        className="object-cover rounded-md mb-4"
        style={{ width: isHovered ? '192px' : '128px', height: isHovered ? '192px' : '128px' }}
        src={image}
        alt={name}
      />
      <div ref={textRef} className="flex flex-col space-y-2 text-center opacity-0 w-full">
        <h1 className="md:text-2xl text-lg font-bold truncate">{name}</h1>
        <h2 className="md:text-base text-sm line-clamp-2">{location}</h2>
        <h2 className="md:text-lg text-base font-bold truncate">{degree}</h2>
        <h2 className="text-sm font-bold">Result: {Result}</h2>
        <h2 className="text-sm font-bold">Year: {Year}</h2>
      </div>
    </div>
  );
};

export default Institute;