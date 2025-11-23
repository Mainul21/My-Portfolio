import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-dark-bg text-text-secondary border-t border-white/5">
      <aside>
        <p className="font-bold flex items-center gap-2">
          Made with <FaHeart className="text-red-500" /> by Md. Mainul Hossain Chisty
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
