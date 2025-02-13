import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/jobstack.png";

export default function Footer() {
  return (
    <footer className="bg-cyan-50 text-white py-8">
      <div className="w-11/12 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-14" />
            <h2 className="text-2xl font-bold text-cyan-400">JobStack</h2>
          </div>
          <p className="mt-2 text-gray-400">Find your dream job with ease.</p>
        </div>

        <div className="text-gray-500">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-cyan-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-cyan-200">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-400">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-cyan-200 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-200 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-200 text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        &copy; {new Date().getFullYear()} JobStack. All rights reserved.
      </div>
    </footer>
  );
}
