import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router"; 
import { motion } from "framer-motion";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs`)
      .then((res) => {
        setJobs(res.data.slice(0, 8)); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center font-bold text-xl lg:text-3xl pb-10">
        All Jobs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <div key={job._id}>
            <div className="card w-full bg-white shadow-lg border border-gray-200 rounded-xl p-3">
              <motion.div
                whileHover={{
                  scale: [null, 1, 1.1],
                  transition: {
                    duration: 0.3,
                    times: [0, 0.6, 1],
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="card-body"
              >
                <img
                  src={job.company_logo} 
                  alt="logo"
                  className="w-2xl rounded-md"
                />
                <h2 className="card-title text-xl font-semibold text-gray-800">
                  {job.title} 
                </h2>
                <p className="text-gray-600 text-sm">{job.company}</p>


                <div className="card-actions mt-4 flex items-center">
                  <Link
                    to={`/jobdetails/${job._id}`} 
                    className="btn btn-primary w-full text-center text-white bg-cyan-300 py-2 px-3 rounded-md"
                  >
                    Details More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        <button className="btn bg-cyan-400 py-2 px-4 rounded-md text-white font-bold">
          Read More
        </button>
      </div>
    </div>
  );
};

export default HotJobs;
