import { MdComputer } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { SiThefinals } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";
import { FaParachuteBox } from "react-icons/fa";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import * as motion from "motion/react-client";

const Service = () => {
  return (
    <div className="w-4/5 mx-auto py-10 mb-14">
      <div className="flex justify-center flex-col items-center py-10">
        <h1 className="font-bold md:text-3xl text-xl">Jobs of the day</h1>
        <p className="text-gray-500">
          Search and connect with the right candidates faster
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {[
          { icon: <MdComputer />, title: "Management" },
          { icon: <SiCoinmarketcap />, title: "Marketing & Sale" },
          { icon: <SiThefinals />, title: "Finance" },
          { icon: <AiFillProduct />, title: "Retail & Product" },
          { icon: <FaParachuteBox />, title: "Human Resource" },
          { icon: <FaBuildingCircleArrowRight />, title: "Content Writer" },
        ].map((item, index) => (
          <motion.div
            whileHover={{
              scale: [null, 1, 1.1],
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                // ease: ["easeInOut", "easeOut"],
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            key={index}
            className="flex items-center gap-2 border-2 rounded-md border-cyan-400 bg-white hover:bg-cyan-300 transition-all duration-300 ease-out justify-center py-5 cursor-pointer"
          >
            <p className="text-cyan-400 text-xl">{item.icon}</p>
            <h3 className="font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
