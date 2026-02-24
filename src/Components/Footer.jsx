import { FaHeart } from "react-icons/fa6";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.from(footerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%",
      }
    });
  });

  return (
    <footer ref={footerRef} className="relative">
      <div className="gradient-divider" />
      <div className="py-10 px-6 text-center space-y-3">
        <p className="text-text-secondary font-medium flex items-center justify-center gap-2">
          Made with <FaHeart className="text-red-400 animate-heartbeat" /> by
          <span className="gradient-text font-bold">Md. Mainul Hossain Chisty</span>
        </p>
        <p className="text-sm text-slate-600">
          Copyright © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
