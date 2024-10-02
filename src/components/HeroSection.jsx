import { Link } from "react-router-dom";
import HeroImage from "../assets/images/food.png";

const HeroSection = () => {
  return (
    <section className="bg-[#495e57] text-white py-20">
      <div className="max-w-[80%] grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto items-center">
        {/* Left Side - Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Little Lemon</h1>
          <h2 className="text-2xl md:text-3xl mb-4">Chicago</h2>
          <p className="text-lg mb-6">
            We are a family-owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illinois. We focus on traditional recipes served
            with a modern twist.
          </p>
          <Link to="/reservation">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Reserve a Table
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div>
          <img
            src={HeroImage}
            alt="Delicious Mediterranean Dish"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
