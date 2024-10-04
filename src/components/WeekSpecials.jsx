import Img1 from "../assets/images/greek-salad.webp";
import ProductCard from "./ProductCard";
function WeekSpecials() {
  return (
    <section className="py-7">
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard
          image={Img1}
          name="sdfsdfsf"
          description="adffdf"
          price="2323"
        />
        <ProductCard
          image={Img1}
          name="sdfsdfsf"
          description="adffdf"
          price="2323"
        />
        <ProductCard
          image={Img1}
          name="sdfsdfsf"
          description="adffdf"
          price="2323"
        />
      </section>
    </section>
  );
}

export default WeekSpecials;
