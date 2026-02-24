import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  const shapesRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return;
        const speed = shape.dataset.speed;
        gsap.to(shape, {
          y: (i + 1) * 60,
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
    { gradient: 'from-indigo-600/20 to-violet-600/20', size: 'w-[500px] h-[500px]', top: '-5%', left: '-10%', speed: 1, delay: '0s' },
    { gradient: 'from-cyan-500/15 to-blue-600/15', size: 'w-[600px] h-[600px]', top: '25%', left: '60%', speed: 2, delay: '2s' },
    { gradient: 'from-violet-600/15 to-pink-500/15', size: 'w-[400px] h-[400px]', top: '55%', left: '5%', speed: 1.5, delay: '4s' },
    { gradient: 'from-indigo-500/15 to-cyan-500/15', size: 'w-[450px] h-[450px]', top: '75%', left: '50%', speed: 0.5, delay: '1s' },
    { gradient: 'from-blue-600/10 to-indigo-600/10', size: 'w-[300px] h-[300px]', top: '10%', left: '40%', speed: 3, delay: '3s' },
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {shapes.map((shape, index) => (
        <div
          key={index}
          ref={(el) => (shapesRef.current[index] = el)}
          data-speed={shape.speed}
          className={`absolute bg-gradient-to-br ${shape.gradient} ${shape.size} rounded-full blur-[100px] animate-morph`}
          style={{
            top: shape.top,
            left: shape.left,
            animationDelay: shape.delay,
            transform: `translate(${mousePos.x * (index + 1) * 5}px, ${mousePos.y * (index + 1) * 5}px)`,
            transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      ))}

      {/* Ambient noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
