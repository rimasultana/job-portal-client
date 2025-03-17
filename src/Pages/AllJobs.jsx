import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs?sort=${sort}`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort]);

  return (
    <div className="w-11/12 mx-auto py-10">
      <div>
        <button
          onClick={() => setSort(!sort)}
          className={`btn bg-amber-500 py-4 px-6 ${sort && "btn bg-green-700"}`}
        >
          {sort == true ? "Sorted by salary" : "sort by salary"}
        </button>
      </div>
      <h1 className="text-center font-bold text-2xl lg:text-3xl pb-10 text-gray-800">
        All Jobs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {jobs.map((job) => (
          <motion.div
            key={job._id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white shadow-lg border border-gray-200 rounded-xl p-4"
          >
            <img
              src={job.company_logo}
              alt={job.company}
              className="w-full h-28 object-contain rounded-md"
            />
            <h2 className="text-lg font-semibold text-gray-900 mt-3">
              {job.title}
            </h2>
            <p className="text-gray-600 text-sm">{job.company}</p>
            <p className="text-sm text-gray-500">
              📍 {job.location} | {job.jobType}
            </p>
            <p className="text-sm font-semibold text-gray-700">
              💰 Salary: {job.salaryRange?.min} - {job.salaryRange?.max}{" "}
              {job.salaryRange?.currency.toUpperCase()}
            </p>

            <Link
              to={`/jobdetails/${job._id}`}
              className="mt-4 inline-block text-center bg-cyan-500 text-white py-2 px-4 rounded-md w-full hover:bg-cyan-600 transition-all"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
