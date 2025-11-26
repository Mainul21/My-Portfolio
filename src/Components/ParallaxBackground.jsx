import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      shapesRef.current.forEach((shape, i) => {
        const speed = shape.dataset.speed;
        gsap.to(shape, {
          y: (i + 1) * 50, // Move down based on index
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: speed,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const shapes = [
    { color: "bg-purple-500", size: "w-64 h-64", top: "top-20", left: "left-10", speed: 1, opacity: "opacity-30" },
    { color: "bg-blue-500", size: "w-96 h-96", top: "top-1/3", right: "right-0", speed: 2, opacity: "opacity-30" },
    { color: "bg-teal-500", size: "w-48 h-48", top: "top-2/3", left: "left-20", speed: 1.5, opacity: "opacity-30" },
    { color: "bg-pink-500", size: "w-72 h-72", top: "top-3/4", right: "right-20", speed: 0.5, opacity: "opacity-30" },
    { color: "bg-indigo-500", size: "w-32 h-32", top: "top-10", right: "right-1/4", speed: 3, opacity: "opacity-30" },
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          ref={(el) => (shapesRef.current[index] = el)}
          data-speed={shape.speed}
          className={`absolute rounded-full blur-3xl ${shape.color} ${shape.size} ${shape.top} ${shape.left || ''} ${shape.right || ''} ${shape.opacity}`}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
