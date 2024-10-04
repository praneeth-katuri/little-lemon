import Img1 from "../assets/images/double-image-1.png";
import Img2 from "../assets/images/double-image-2.png";

const About = () => {
  return (
    <section className="bg-[#f4ce14]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Little Lemon</h2>
          <p>Chicago</p>
          <p>
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </div>
        <div className="double-image relative h-[300px]">
          <img src={Img1} alt="" className="h-full object-cover w-[60%]" />
          <img
            src={Img2}
            alt=""
            className="absolute object-cover w-[60%] left-[5rem] top-[-3.5rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
