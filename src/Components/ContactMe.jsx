import { useRef, useState, useEffect } from "react";
import { FaPaperPlane, FaEnvelope, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import Typewriter from "react-ts-typewriter";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const formRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [typewriterText] = useState("Let's build something amazing together!");

  const public_key = import.meta.env.VITE_public_key;
  const service_id = import.meta.env.VITE_service_id;
  const template_id = import.meta.env.VITE_template_id;

  useEffect(() => {
    emailjs.init({ publicKey: public_key });
  }, []);

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

    gsap.from(containerRef.current.querySelectorAll('.animate-child'), {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    if (!service_id || !template_id || !public_key) {
      Swal.fire({
        icon: "error",
        title: "Configuration Error",
        text: "Please contact the administrator.",
        background: "#1e293b",
        color: "#f8fafc",
        confirmButtonColor: "#6366f1",
      });
      setIsSending(false);
      return;
    }

    emailjs.sendForm(service_id, template_id, formRef.current)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "I'll get back to you soon.",
          background: "#1e293b",
          color: "#f8fafc",
          confirmButtonColor: "#6366f1",
        });
        formRef.current.reset();
        setIsSending(false);
      }, (error) => {
        console.error("EmailJS Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again.",
          background: "#1e293b",
          color: "#f8fafc",
          confirmButtonColor: "#6366f1",
        });
        setIsSending(false);
      });
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/mainulhossainchisty/", icon: <FaLinkedinIn />, label: "LinkedIn", hoverColor: "hover:text-blue-400 hover:bg-blue-400/10 hover:border-blue-400/30" },
    { href: "https://github.com/Mainul21", icon: <FaGithub />, label: "GitHub", hoverColor: "hover:text-white hover:bg-white/10 hover:border-white/30" },
    { href: "https://www.instagram.com/mainul_irl?igsh=MWdlMHYzbXRqaHdhcA==", icon: <FaInstagram />, label: "Instagram", hoverColor: "hover:text-pink-400 hover:bg-pink-400/10 hover:border-pink-400/30" },
  ];

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 lg:px-20 relative">
      <div className="gradient-divider mb-20" />

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-600/[0.05] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left Column: Info */}
        <div className="space-y-8">
          <div ref={headingRef} className="space-y-4">
            <div className="section-label">
              CONTACT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Let's <span className="gradient-text">talk?</span>
            </h2>
          </div>

          <div className="animate-child text-xl text-text-secondary h-16 font-light">
            <span className="text-accent-indigo font-mono text-sm mr-2">&gt;</span>
            <Typewriter
              text={typewriterText}
              loop={true}
              speed={50}
              delay={2000}
            />
          </div>

          <p className="animate-child text-text-secondary leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>

          <div className="animate-child flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-accent-indigo group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope className="text-lg" />
            </div>
            <a href="mailto:mainul.hossain.chisty@gmail.com" className="text-white hover:text-accent-teal transition-colors duration-300 font-medium">
              mainul.hossain.chisty@gmail.com
            </a>
          </div>

          <div className="animate-child flex gap-3 pt-2">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-secondary transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                aria-label={social.label}
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="animate-child glass-card p-8 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Subtle gradient accent on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-indigo via-accent-teal to-accent-violet" />

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-dark-bg/60 border border-white/10 rounded-xl p-3.5 text-white form-input-animated outline-none transition-all duration-300 placeholder:text-slate-500"
                placeholder="John Doe"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-dark-bg/60 border border-white/10 rounded-xl p-3.5 text-white form-input-animated outline-none transition-all duration-300 placeholder:text-slate-500"
                placeholder="john@example.com"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full bg-dark-bg/60 border border-white/10 rounded-xl p-3.5 text-white form-input-animated outline-none transition-all duration-300 resize-none placeholder:text-slate-500"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full relative overflow-hidden bg-gradient-to-r from-accent-indigo to-accent-teal text-white font-bold py-4 rounded-xl transition-all duration-500 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-indigo-500/25 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;