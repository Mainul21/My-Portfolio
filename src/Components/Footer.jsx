import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Education</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">About Me</a>
          <a className="link link-hover">Skills</a>
        </nav>
        <div className="font-bold">
          <h1 className="flex justify-center items-center"><FaPhone className="mr-2 text-amber-500 text-lg"/> +8801634070584</h1>
          <h1 className="flex justify-center items-center"><HiOutlineMail className="mr-2 text-amber-500 text-lg"/> mainul.hossain.chisty@g.bracu.ac.bd</h1>
        </div>
        <aside>
          <p>Thank you for visiting my portfolio❤️</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
