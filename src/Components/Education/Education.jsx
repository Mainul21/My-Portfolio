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
    <section className="py-20 px-6 md:px-12 lg:px-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-accent-teal font-bold tracking-widest text-sm uppercase">
            <span className="text-lg">✖</span> EDUCATION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            Educational <span className="text-accent-teal">Institutes</span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch gap-6 h-[500px]">
          {institutes.map((institute, index) => (
            <div
              key={index}
              ref={(el) => (wrappers.current[index] = el)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
              className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 transition-all duration-500"
              style={{ width: "33.33%", minWidth: 0 }}
            >
              <Institute institute={institute} isHovered={hovered === index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;