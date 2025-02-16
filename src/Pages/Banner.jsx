import { easeInOut, easeOut } from "motion";
import * as motion from "motion/react-client";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
const Banner = () => {
  return (
    <section className="py-20 px-5 bg-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
        <div className="text-center md:text-left">
          <motion.h1
            animate={{ x: 50, color: ["#48dbfb", "#74b9ff", "#fd79a8"] }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
              repeat: Infinity,
            }}
            className="text-3xl md:text-5xl font-bold text-gray-800"
          >
            Latest <motion.span animate={{ color: ["cyan"] }}>Jobs</motion.span>{" "}
            for you!
          </motion.h1>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            dignissimos, laudantium, nisi ex similique minus..
          </p>
          <button className="mt-4 bg-cyan-400 hover:bg-cyan-500 py-2 px-4 rounded-md text-white font-medium transition duration-300">
            Get Started
          </button>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{
              duration: 10,
              delay: 2,
              ease: easeOut,
              repeat: Infinity,
            }}
            src={team1}
            alt="Job Stack"
            className="w-full max-w-[58%] md:max-w-84 object-cover rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 shadow-lg border-cyan-400"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{
              duration: 10,
              delay: 2,
              ease: easeOut,
              repeat: Infinity,
            }}
            src={team2}
            alt="Job Stack"
            className="w-full max-w-[58%] md:max-w-84 object-cover rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 shadow-lg border-cyan-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
