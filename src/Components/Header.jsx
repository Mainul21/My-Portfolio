import { SiAnkermake } from "react-icons/si";

const Header = ({ scrollToSection, scroll }) => {
  const navItems = [
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Education", section: "education" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-white/5">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-accent-teal">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-card-bg rounded-box w-52 text-text-secondary">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a onClick={() => item.section === 'about' ? scroll() : scrollToSection(item.section)}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <a onClick={() => scrollToSection('about')} className="btn btn-ghost text-xl text-accent-teal font-bold tracking-wider flex items-center gap-2 cursor-pointer">
            <SiAnkermake /> Mainul Hossain
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  onClick={() => item.section === 'about' ? scroll() : scrollToSection(item.section)}
                  className="text-text-secondary hover:text-accent-teal transition-colors duration-300 text-sm uppercase tracking-widest font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Optional: Add a CTA button if needed, or keep empty as per design */}
        </div>
      </div>
    </div>
  );
};

export default Header;
