import { useRef } from "react";
import { FaHeadset } from "react-icons/fa6";
import Typewriter from "react-ts-typewriter";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";


const ContactMe = () => {
  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("submitted");

    emailjs
      .sendForm(import.meta.env.VITE_service_id, import.meta.env.VITE_template_id, formRef.current, {
        publicKey: import.meta.env.VITE_public_key,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Email Sent!! Will get back to you",
            showConfirmButton: false,
            timer: 1500
          });
          formRef.current.reset()
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="md:p-10">
      <div className="md:p-10 py-4">
        <h1 className="font-bold md:text-5xl text-3xl flex items-center justify-center gap-2">
          <FaHeadset className="text-blue-500" /> Get in{" "}
          <span className="text-amber-500">Touch</span>
        </h1>
      </div>
      <div className="p-5">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          action=""
          className=" border rounded-xl shadow-xl shadow-emerald-500 p-4 md:grid md:grid-cols-2 flex flex-col gap-4"
        >
          <div className="font-bold md:text-5xl text-3xl flex items-center justify-center ml-3">
            <Typewriter
              text="Thank you for getting in touch"
              
              delay={1000}
            ></Typewriter>
          </div>
          <div className="form-control items-end space-y-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered input-success w-full max-w-lg"
              required
            />
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              className="input input-bordered input-success w-full max-w-lg"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="number"
              className="input input-bordered input-success w-full max-w-lg"
            />
            <textarea
              className="textarea textarea-success w-full max-w-lg"
              placeholder="Message"
              name="message"
              required
            ></textarea>

            <button
              value="submit"
              className="btn bg-amber-500 text-black w-full max-w-lg hover:bg-blue-500 hover:text-white "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
