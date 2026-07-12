import { assets } from "../assets/assets";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
      initial={{ opacity: 0, x: 200 }}
      whileInView={{opacity: 1, x:0}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 under font-light">
            Our Brand
        </span>
      </h1>
      <p className="text-grey-500 max-w-80 text-center mb-8">
        Passionate About properties, Dedicated to your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            We design and build modern spaces that redefine contemporary living and urban landscapes.
             By combining sustainable construction practices with sophisticated design, we bring ambitious architectural concepts to life.
              Our focus remains on creating vibrant, reliable environments that inspire communities 
              and provide lasting value for generations to come.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
