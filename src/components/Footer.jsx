import { Link } from "react-router-dom";
import Logo from "../assets/icons/footer-logo.png";
import navLinks from "../data/navLinks";

const Footer = () => {
  return (
    <footer className="bg-[#495e57] text-white py-6">
      <div className="flex justify-around items-start">
        <div>
          <img src={Logo} alt="" className="h-50" />
        </div>
        <nav className="flex flex-col justify-between space-y-1 ">
          <h2 className="font-bold">Navigation</h2>
          {navLinks.map((link) => (
            <Link to={link.to} key={link.name}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col">
          <h2 className="font-bold">Contact</h2>
          <address className="space-y-1">
            <p>2395 Maldove Way</p>
            <p>Chicago Illinois</p>
            <p>
              <a href="tel:+(629)-243-6827">(629)-243-6827</a>
            </p>
            <p>
              <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
            </p>
          </address>
        </div>

        <div>
            <h2 className="font-bold">Follow Us</h2>
            <nav className="flex flex-col">
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                <a href="">Youtube</a>
            </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
