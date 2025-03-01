import axios from "axios";
import { useEffect, useState } from "react";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Length of data {jobs.length}</h1>
    </div>
  );
};

export default HotJobs;
