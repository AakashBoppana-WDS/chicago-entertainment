import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src="/images/logo.jpeg"
            alt="PhotoBooth Logo"
            className="h-30 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-sm text-gray-300">

          <a
            href="#hero"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-cyan-400 transition duration-300"
          >
            Services
          </a>

          <a
            href="#gallery"
            className="hover:text-cyan-400 transition duration-300"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center gap-5 text-gray-300 text-lg">

          <a
            href="#"
            className="hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaTwitter />
          </a>

        </div>

      </div>

    </header>
  );
}