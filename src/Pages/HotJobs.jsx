import axios from "axios";
import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

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
          <HotJobsCard key={job._id} job="job"></HotJobsCard>
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
      <button className="btn bg-cyan-400 py-2 px-4 rounded-md text-white font-bold">Read More</button>
      </div>
    </div>
  );
};

export default HotJobs;
