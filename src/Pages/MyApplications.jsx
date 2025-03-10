import AuthContext from "@/provider/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  console.log(jobs);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/application?email=${user.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          setJobs(res.data);
        })
        .catch((error) => console.error("Error fetching applications:", error));
    }
  }, [user.email]);

  return (
    <div className="w-full md:11/12 mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center py-10">
        My Applications: {jobs.length}
      </h2>
      <table className="w-4/5 mx-auto border-2 border-gray-300 border-collapse text-center">
        <thead>
          <tr>
            <th className="py-3 px-4 border-b-2 border-r-2 border-gray-300">
              Title
            </th>
            <th className="py-3 px-4 border-b-2 border-r-2 border-gray-300">
              Logo
            </th>
            <th className="py-3 px-4 border-b-2 border-r-2 border-gray-300">
              Company Name
            </th>
            <th className="py-3 px-4 border-b-2 border-gray-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((application, index) => (
              <tr key={index}>
                <td className="py-3 px-4 border-b-2 border-r-2 border-gray-300">
                  {application.title}
                </td>
                <td className="py-3 px-4 border-b-2 border-r-2 border-gray-300">
                  {application.company_logo ? (
                    <img
                      src={application.company_logo}
                      alt="Company Logo"
                      className="w-16 h-12 rounded-full"
                    />
                  ) : (
                    <span>No Logo</span>
                  )}
                </td>
                <td className="py-3 px-4 border-b-2 border-r-2 border-gray-300">
                  {application.company}
                </td>
                <td className="py-3 px-4 border-b-2 border-gray-300">
                  {user.email}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="py-3 px-4 text-center border-b-2 border-gray-300"
              >
                No applications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyApplications;
