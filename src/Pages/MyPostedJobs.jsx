import AuthContext from "@/provider/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  console.log(user);
  console.log(jobs);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/jobs?email=${user.email}`)
        .then((response) => {
          console.log(response.data);
          setJobs(response.data);
        })
        .catch((error) => {
          console.error("Error fetching jobs:", error);
        });
    }
  }, [user?.email]);

  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6">
        Your Posted Jobs ({jobs.length})
      </h1>
      {/* Conditionally render if jobs are available */}
      {jobs.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-gray-600">#</th>
              <th className="px-4 py-2 text-left text-gray-600">Title</th>
              <th className="px-4 py-2 text-left text-gray-600">Location</th>
              <th className="px-4 py-2 text-left text-gray-600">Category</th>
              <th className="px-4 py-2 text-left text-gray-600">Hr Email</th>
              <th className="px-4 py-2 text-left text-gray-600">
                Application Id
              </th>
              <th className="px-4 py-2 text-left text-gray-600">view</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id} className="border-b">
                <td className="px-4 py-2 text-gray-700">{index + 1}</td>
                <td className="px-4 py-2 text-gray-700">{job.title}</td>
                <td className="px-4 py-2 text-gray-700">{job.location}</td>
                <td className="px-4 py-2">{job.category}</td>
                <td className="px-4 py-2">{job.hr_email}</td>
                <td className="px-4 py-2">{job.applicationCount}</td>
                <td>
                  <Link to={"/viewapplication/:job_id"}>
                    <button className="btn bg-cyan-500 py-2 px-3">
                      View Application
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>
  );
};

export default MyPostedJobs;
