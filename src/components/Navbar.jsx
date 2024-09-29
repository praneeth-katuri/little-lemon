import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo.png";
import navLinks from "../data/navLinks";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-16">
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center justify-center flex-grow">
          <img src={Logo} alt="Little Lemon Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center flex-grow space-x-6">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.to}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
