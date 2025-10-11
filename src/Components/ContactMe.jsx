import { useRef, useState, useEffect } from "react";
import { FaHeadset } from "react-icons/fa6";
import Typewriter from "react-ts-typewriter";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const typewriterRef = useRef(null);
  const inputsRef = useRef(null);
  const [typewriterText, setTypewriterText] = useState("Thank you for getting in touch!");
  const public_key = import.meta.env.VITE_public_key;
  const service_id = import.meta.env.VITE_service_id;
  const template_id = import.meta.env.VITE_template_id;
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({ publicKey: public_key });
  }, []);

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(typewriterRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: typewriterRef.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(inputsRef.current.children, {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: inputsRef.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate environment variables
    if (!service_id || !template_id || !public_key) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Configuration error. Please contact the administrator.",
        showConfirmButton: false,
        timer: 2000,
      });
      console.error("Missing EmailJS configuration:", {
        service_id: service_id,
        template_id: template_id,
        public_key: public_key,
      });
      return;
    }

    // Validate email format
    const emailInput = formRef.current.querySelector('input[name="email"]').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter a valid email address.",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    // Log form data for debugging
    console.log("Form data:", Object.fromEntries(new FormData(formRef.current)));

    emailjs
      .sendForm(
        import.meta.env.VITE_service_id,
        import.meta.env.VITE_template_id,
        formRef.current
      )
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email Sent! I'll get back to you soon.",
            showConfirmButton: false,
            timer: 1500,
          });
          setTypewriterText("Message sent successfully!");
          formRef.current.reset();
          // Reset typewriter text after 5 seconds
          setTimeout(() => {
            setTypewriterText("Thank you for getting in touch!");
          }, 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          let errorMessage = "Failed to send email. Please try again.";
          if (error.status === 422 && error.text.includes("recipients address is empty")) {
            errorMessage = "Recipient email address is missing in the template. Please contact the administrator.";
          }
          Swal.fire({
            position: "center",
            icon: "error",
            title: errorMessage,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
  };

  return (
    <section className="bg-gray-900 py-12 px-6 md:px-12 lg:px-20 border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-extrabold text-center text-white flex items-center justify-center gap-2 mb-12"
        >
          <FaHeadset className="text-blue-500" /> Get in{" "}
          <span className="text-amber-400">Touch</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div ref={typewriterRef} className="flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-300 text-center">
              <Typewriter
                text={typewriterText}
                delay={2000}
                speed={50}
              />
            </h2>
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-shadow duration-300"
          >
            <div ref={inputsRef} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name" // Ensure this matches the EmailJS template variable
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email" // Ensure this matches the EmailJS template variable
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                name="number" // Ensure this matches the EmailJS template variable
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                placeholder="Your Message"
                name="message" // Ensure this matches the EmailJS template variable
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[120px]"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-amber-500 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;