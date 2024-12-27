import ProjectCard from "./ProjectCard";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const Projects = () => {

  const anime = useRef(null);  
  useGSAP(
    gsap.to(anime, {
      boxShadow: "0 0 50px rgba(16, 185, 129, 1)", // Expanded shadow
      duration: 1.5,
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse animation for a breathing effect
      ease: "power1.inOut", // Smooth easing
    })
  );


  const projects = [
    {
      name: "Book Review",
      description:
        "A website built with MERN stack to Share book reviews with others. Basic frontend practice project. Backend work in progress",
      image: "https://i.ibb.co.com/rQ08znz/Screenshot-2024-12-10-191356.png",
      liveLink: "https://pricey-war.surge.sh/",
      gitLink: "https://github.com/Mainul21/Book-review",
    },
    {
      name: "king's Estate",
      description:
        "A website built with MERN stack for property Dealing. Basic frontend is complete. Backend work in progress",
      image: "https://i.ibb.co.com/qBkNctx/Screenshot-2024-12-10-202728.png",
      liveLink: "https://kings-estate.web.app/",
      github: "https://github.com/Mainul21/Kings-Estate",
    },
    {
      name: "Snake Game",
      description:
        "Classic snake game built with python OpenGL library. Built from scratch",
      image: "https://i.ibb.co.com/Z6T6YzB/Screenshot-2024-12-10-204403.png",
      gitLink: "https://github.com/Mainul21/Snake-Game",
    },
    {
      name: "Diamond Catcher",
      description:
        "Classic diamond catcher game built with python OpenGL library. Built from scratch",
      image: "https://i.ibb.co.com/SNjVHmz/Screenshot-2024-12-10-204831.png",
      gitLink: "https://github.com/Mainul21/Diamond-Catcher",
    },
  ];
  return (
    <div className="md:p-10 border-b">
      <div className="p-3 mb-10">
        <h1 className="text-center font-bold text-5xl">Projects & <span className="text-amber-500">Work</span></h1>
      </div>
      <div ref={anime} className='lg:grid lg:grid-cols-2 gap-4 flex flex-col border rounded py-5 px-4 shadow-xl shadow-emerald-500 mb-10'>
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
