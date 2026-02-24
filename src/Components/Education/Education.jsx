import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Institute from "./Institute";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const [hovered, setHovered] = useState(-1);
  const wrappers = useRef([]);
  const containerRef = useRef(null);
  const headingRef = useRef(null);

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
      Result: "3.36/4.00",
      image: 'https://i.ibb.co.com/hVd4DS6/brac.jpg'
    },
  ];

  // Heading animation
  useGSAP(() => {
    gsap.from(headingRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (hovered === -1) {
          wrappers.current.forEach((el) => {
            if (el) {
              gsap.to(el, {
                width: "33.33%",
                opacity: 1,
                duration: 0.6,
                ease: "power3.inOut",
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
                  duration: 0.6,
                  ease: "power3.inOut",
                });
              } else {
                gsap.to(el, {
                  width: "0%",
                  opacity: 0,
                  duration: 0.6,
                  ease: "power3.inOut",
                });
              }
            }
          });
        }
      });

      mm.add("(max-width: 767px)", () => {
        wrappers.current.forEach((el) => {
          if (el) {
            gsap.set(el, {
              width: "100%",
              opacity: 1,
            });
          }
        });
      });
    }, wrappers);

    return () => ctx.revert();
  }, [hovered]);

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 lg:px-20 relative">
      <div className="gradient-divider mb-20" />
      <div className="max-w-7xl mx-auto space-y-12">
        <div ref={headingRef} className="flex flex-col items-center gap-4">
          <div className="section-label">
            EDUCATION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            Educational <span className="gradient-text">Institutes</span>
          </h2>
          <p className="text-text-secondary text-center max-w-lg">Where I built my academic foundation</p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-4 h-auto md:h-[500px]">
          {institutes.map((institute, index) => (
            <div
              key={index}
              ref={(el) => (wrappers.current[index] = el)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
              className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-accent-indigo/30 transition-all duration-700 w-full md:w-1/3 h-[300px] md:h-auto group"
              style={{ minWidth: 0 }}
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