import { SiAnkermake } from "react-icons/si";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Header = ({ scrollToSection, scroll }) => {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
    { name: "Education", section: "education" },
    { name: "Contact", section: "contact" },
  ];

  // Entrance animation
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(logoRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(navRef.current?.children || [], {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      }, "-=0.4");
  });

  // Smart header: hide on scroll down, show on scroll up + glass effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > prevScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setPrevScrollY(currentScrollY);

      // Active section detection
      const sections = ["about", "skills", "experience", "projects", "education", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'
        } ${isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
          : 'bg-transparent'
        }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-accent-teal">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-card-bg/95 backdrop-blur-xl rounded-xl w-56 border border-white/10 space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    onClick={() => item.section === 'about' ? scroll() : scrollToSection(item.section)}
                    className={`text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${activeSection === item.section
                        ? 'text-accent-teal bg-accent-teal/10'
                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            ref={logoRef}
            onClick={() => scrollToSection('about')}
            className="btn btn-ghost text-xl font-bold tracking-wider flex items-center gap-2 cursor-pointer group"
          >
            <SiAnkermake className="text-accent-indigo group-hover:text-accent-teal transition-colors duration-300" />
            <span className="gradient-text">Mainul Hossain</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul ref={navRef} className="menu menu-horizontal px-1 gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  onClick={() => item.section === 'about' ? scroll() : scrollToSection(item.section)}
                  className={`relative text-sm uppercase tracking-widest font-medium px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.section
                      ? 'text-accent-teal bg-accent-teal/10'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                  {activeSection === item.section && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-accent-indigo to-accent-teal rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end" />
      </div>
    </div>
  );
};

export default Header;
