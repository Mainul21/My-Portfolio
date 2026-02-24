import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

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

  const projects = [
    {
      name: "Book Review",
      description:
        "A MERN stack website for sharing book reviews. Frontend completed, backend in progress.",
      image: "https://i.ibb.co.com/rQ08znz/Screenshot-2024-12-10-191356.png",
      liveLink: "https://pricey-war.surge.sh/",
      gitLink: "https://github.com/Mainul21/Book-review",
    },
    {
      name: "Core Banking System",
      description:
        "An academic prototype of a core banking system built using PERN stack, featuring user authentication, account management, and transaction processing, loan management and more.",
      image: "https://i.ibb.co.com/nNT88B51/Screenshot-2025-03-19-115303.png",
      liveLink: "https://core-banking-system-850t.onrender.com",
      gitLink: "https://github.com/Mainul21/Core-Banking-System",
    },
    {
      name: "Snake Game",
      description: "Classic Snake game built from scratch using Python and OpenGL.",
      image: "https://i.ibb.co.com/Z6T6YzB/Screenshot-2024-12-10-204403.png",
      gitLink: "https://github.com/Mainul21/Snake-Game",
    },
    {
      name: "Diamond Catcher",
      description: "Classic Diamond Catcher game built from scratch using Python and OpenGL.",
      image: "https://i.ibb.co.com/SNjVHmz/Screenshot-2024-12-10-204831.png",
      gitLink: "https://github.com/Mainul21/Diamond-Catcher",
    },
    // Duplicating projects for smooth looping
    {
      name: "Book Review",
      description:
        "A MERN stack website for sharing book reviews. Frontend completed, backend in progress.",
      image: "https://i.ibb.co.com/rQ08znz/Screenshot-2024-12-10-191356.png",
      liveLink: "https://pricey-war.surge.sh/",
      gitLink: "https://github.com/Mainul21/Book-review",
    },
    {
      name: "Core Banking System",
      description:
        "An academic prototype of a core banking system built using PERN stack, featuring user authentication, account management, and transaction processing, loan management and more.",
      image: "https://i.ibb.co.com/nNT88B51/Screenshot-2025-03-19-115303.png",
      liveLink: "https://core-banking-system-850t.onrender.com",
      gitLink: "https://github.com/Mainul21/Core-Banking-System",
    },
    {
      name: "Snake Game",
      description: "Classic Snake game built from scratch using Python and OpenGL.",
      image: "https://i.ibb.co.com/Z6T6YzB/Screenshot-2024-12-10-204403.png",
      gitLink: "https://github.com/Mainul21/Snake-Game",
    },
    {
      name: "Diamond Catcher",
      description: "Classic Diamond Catcher game built from scratch using Python and OpenGL.",
      image: "https://i.ibb.co.com/SNjVHmz/Screenshot-2024-12-10-204831.png",
      gitLink: "https://github.com/Mainul21/Diamond-Catcher",
    },
    {
      name: "Book Review",
      description:
        "A MERN stack website for sharing book reviews. Frontend completed, backend in progress.",
      image: "https://i.ibb.co.com/rQ08znz/Screenshot-2024-12-10-191356.png",
      liveLink: "https://pricey-war.surge.sh/",
      gitLink: "https://github.com/Mainul21/Book-review",
    },
    {
      name: "Core Banking System",
      description:
        "An academic prototype of a core banking system built using PERN stack, featuring user authentication, account management, and transaction processing, loan management and more.",
      image: "https://i.ibb.co.com/nNT88B51/Screenshot-2025-03-19-115303.png",
      liveLink: "https://core-banking-system-850t.onrender.com",
      gitLink: "https://github.com/Mainul21/Core-Banking-System",
    },
    {
      name: "Snake Game",
      description: "Classic Snake game built from scratch using Python and OpenGL.",
      image: "https://i.ibb.co.com/Z6T6YzB/Screenshot-2024-12-10-204403.png",
      gitLink: "https://github.com/Mainul21/Snake-Game",
    },
    {
      name: "Diamond Catcher",
      description: "Classic Diamond Catcher game built from scratch using Python and OpenGL.",
      image: "https://i.ibb.co.com/SNjVHmz/Screenshot-2024-12-10-204831.png",
      gitLink: "https://github.com/Mainul21/Diamond-Catcher",
    },
  ];

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-0 relative z-0">
      <div className="gradient-divider mb-20" />
      <div className="max-w-7xl mx-auto space-y-12">
        <div ref={headingRef} className="flex flex-col items-center gap-4">
          <div className="section-label">
            PORTFOLIO
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            Projects & <span className="gradient-text">Work</span>
          </h2>
          <p className="text-text-secondary text-center max-w-lg">A selection of my recent projects and experiments</p>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper py-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-[350px] md:w-[450px]">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;