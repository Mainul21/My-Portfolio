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
  const [typewriterText, setTypewriterText] = useState("Let's build something amazing together!");
  
  const public_key = import.meta.env.VITE_public_key;
  const service_id = import.meta.env.VITE_service_id;
  const template_id = import.meta.env.VITE_template_id;

  useEffect(() => {
    emailjs.init({ publicKey: public_key });
  }, []);

  useGSAP(() => {
    gsap.from(containerRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!service_id || !template_id || !public_key) {
      Swal.fire({
        icon: "error",
        title: "Configuration Error",
        text: "Please contact the administrator.",
        background: "#1a1f25",
        color: "#fff"
      });
      return;
    }

    emailjs.sendForm(service_id, template_id, formRef.current)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "I'll get back to you soon.",
          background: "#1a1f25",
          color: "#fff",
          confirmButtonColor: "#4fd1c5"
        });
        formRef.current.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again.",
          background: "#1a1f25",
          color: "#fff"
        });
      });
  };

  return (
    <section ref={containerRef} className="bg-dark-bg py-20 px-6 md:px-12 lg:px-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-accent-teal font-bold tracking-widest text-sm uppercase">
            <span className="text-lg">✖</span> CONTACT
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let's <span className="text-accent-teal">talk?</span>
          </h2>

          <div className="text-xl text-gray-400 h-20">
            <Typewriter
              text={typewriterText}
              loop={true}
              speed={50}
              delay={2000}
            />
          </div>

          <div className="space-y-4">
            <p className="text-gray-400">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>
            
            <div className="flex items-center gap-4 text-white hover:text-accent-teal transition-colors">
              <FaEnvelope className="text-xl" />
              <a href="mailto:mainul.hossain.chisty@g.bracu.ac.bd" className="text-lg">mainul.hossain.chisty@g.bracu.ac.bd</a>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://www.linkedin.com/in/mainulhossainchisty/" target="_blank" rel="noopener noreferrer" className="p-3 bg-card-bg rounded-lg text-white hover:text-accent-teal hover:bg-white/5 transition-all">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="https://github.com/Mainul21" target="_blank" rel="noopener noreferrer" className="p-3 bg-card-bg rounded-lg text-white hover:text-accent-teal hover:bg-white/5 transition-all">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.instagram.com/mainul_irl?igsh=MWdlMHYzbXRqaHdhcA==" target="_blank" rel="noopener noreferrer" className="p-3 bg-card-bg rounded-lg text-white hover:text-accent-teal hover:bg-white/5 transition-all">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-card-bg p-8 rounded-2xl border border-white/5 shadow-xl">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-dark-bg border border-gray-700 rounded-lg p-3 text-white focus:border-accent-teal focus:ring-1 focus:ring-accent-teal outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-dark-bg border border-gray-700 rounded-lg p-3 text-white focus:border-accent-teal focus:ring-1 focus:ring-accent-teal outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full bg-dark-bg border border-gray-700 rounded-lg p-3 text-white focus:border-accent-teal focus:ring-1 focus:ring-accent-teal outline-none transition-all resize-none"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent-teal text-dark-bg font-bold py-4 rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;