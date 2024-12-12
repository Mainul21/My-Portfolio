import { FaHeadset } from "react-icons/fa6";
import Typewriter from 'react-ts-typewriter';

const ContactMe = () => {

  

  return (
    <div className="p-10">
      <div className="p-10">
        <h1 className="font-bold text-5xl flex items-center justify-center gap-2">
          <FaHeadset className="text-blue-500" /> Get in{" "}
          <span className="text-amber-500">Touch</span>
        </h1>
      </div>
      <div className="p-5">
        <form
          action=""
          className=" border rounded-xl shadow-xl shadow-emerald-500 p-4 grid grid-cols-2"
        >
          <div className="font-bold text-5xl flex items-center ml-3">
            <Typewriter text='Thank you for getting in touch' loop delay={1000}></Typewriter>
          </div>
          <div className="form-control items-end space-y-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered input-success w-full max-w-lg"
            />
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              className="input input-bordered input-success w-full max-w-lg"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-success w-full max-w-lg"
            />
            <textarea
              className="textarea textarea-success w-full max-w-lg"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
