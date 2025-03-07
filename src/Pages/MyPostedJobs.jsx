import AuthContext from "@/provider/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

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
          setJobs(response.data); // Update jobs state with the fetched data
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
              <th className="px-4 py-2 text-left text-gray-600">
                Company Logo
              </th>
              <th className="px-4 py-2 text-left text-gray-600">Actions</th>
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
