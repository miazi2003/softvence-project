import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#064c39] text-white">
      <div className="footer sm:footer-horizontal p-10 max-w-7xl mx-auto">
        {/* Company */}
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-gray-300">About</a>
          <a className="link link-hover text-gray-300">Fix And Flip Loans</a>
          <a className="link link-hover text-gray-300">DSCR Rental Loans</a>
          <a className="link link-hover text-gray-300">Ground Up Construction Loans</a>
          <h6 className="footer-title text-white mt-4">Where We Lend</h6>
          <a className="link link-hover text-gray-300">Florida</a>
          <a className="link link-hover text-gray-300">Texas</a>
          <a className="link link-hover text-gray-300">Georgia</a>
        </nav>

        {/* Cities */}
        <nav>
          <h6 className="footer-title text-white">Top Cities We Lend In</h6>
          {["Orlando", "Tampa", "Miami", "Jacksonville", "Houston", "Austin", "Dallas", "San Antonio"].map((city) => (
            <a key={city} className="link link-hover text-gray-300">
              {city}
            </a>
          ))}
        </nav>

        {/* Resources */}
        <nav>
          <h6 className="footer-title text-white">Top Resources</h6>
          <a className="link link-hover text-gray-300">Loan Calculator</a>
          <a className="link link-hover text-gray-300">What is a Hard Money Loan</a>
          <a className="link link-hover text-gray-300">How to find fix and flip deals</a>
          <a className="link link-hover text-gray-300">Best Cities for Fix and Flips</a>
          <h6 className="footer-title text-white mt-4">Useful Link</h6>
          <a className="link link-hover text-gray-300">Privacy Policy</a>
          <a className="link link-hover text-gray-300">Terms of Use</a>
        </nav>

        {/* Contact */}
        <nav>
          <h6 className="footer-title text-white">Contact Us</h6>
          <a className="flex items-center gap-2 link-hover text-gray-300">
            <MdEmail /> loans@ridgestreetcap.com
          </a>
          <a className="flex items-center gap-2 link-hover text-gray-300">
            <MdPhone /> 786-304-2751
          </a>

          <div className="mt-4">
            <div className="bg-white text-[#064c39] font-bold px-4 py-2 inline-block rounded shadow">
              RIDGE STREET
            </div>
          </div>

          <div className="flex gap-4 mt-4 text-white text-lg">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
