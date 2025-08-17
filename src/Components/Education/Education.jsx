import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Institute from "./Institute";

const Education = () => {
  const [hovered, setHovered] = useState(-1);
  const wrappers = useRef([]);

  const institutes = [
    {
      name: "Titas Gas Adarsha High School",
      location: "Demra, Dhaka",
      degree: 'Secondary School Certificate',
      Year: "2018",
      Result: "4.67/5.00",
      image: 'https://i.ibb.co.com/MpXKq1g/titas.jpg'
    },
    {
      name: "Government Tolaram College",
      location: "Chashara, Naraynganj",
      degree: "Higher Secondary School Certificate",
      Year: "2020",
      Result: "4.50/5.00",
      image: "https://i.ibb.co.com/nrbbFmz/college.jpg",
    },
    {
      name: "BRAC University",
      location: "Kha 224, Bir Uttam Rafiqul Islam Avenue, Merul Badda, Dhaka",
      degree: 'Bachelors of Computer Science',
      Year: "2021 - Present",
      Result: "3.34/4.00",
      image: 'https://i.ibb.co.com/hVd4DS6/brac.jpg'
    },
  ];

  useEffect(() => {
    if (hovered === -1) {
      wrappers.current.forEach((el) => {
        if (el) {
          gsap.to(el, {
            width: "33.33%",
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      });
    } else {
      wrappers.current.forEach((el, i) => {
        if (el) {
          if (i === hovered) {
            gsap.to(el, {
              width: "100%",
              opacity: 1,
              duration: 0.5,
              ease: "power2.inOut",
            });
          } else {
            gsap.to(el, {
              width: "0%",
              opacity: 0,
              duration: 0.5,
              ease: "power2.inOut",
            });
          }
        }
      });
    }
  }, [hovered]);

  return (
    <div className="md:px-10 md:py-10 py-5 space-y-5 border-b border-gray-800 mb-5">
      <div className="p-4 mb-3">
        <h1 className="md:text-5xl text-3xl font-bold text-center">
          Educational <span className="text-amber-500">Institutes</span>
        </h1>
      </div>
      <div className="flex flex-row items-stretch overflow-hidden">
        {institutes.map((institute, index) => (
          <div
            key={index}
            ref={(el) => (wrappers.current[index] = el)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(-1)}
            className="transition-all duration-500 px-2"
            style={{ width: "33.33%", minWidth: 0 }}
          >
            <Institute institute={institute} isHovered={hovered === index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;