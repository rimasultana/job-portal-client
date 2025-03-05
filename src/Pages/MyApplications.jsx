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
        .get(`http://localhost:5000/application?email=${user.email}`)
        .then((res) => {
          setJobs(res.data);
        })
        .catch((error) => console.error("Error fetching applications:", error));
    }
  }, [user.email]);

  return (
    <div>
      <h2>My Application: {jobs.length}</h2>
      <table
        style={{
          width: "100%",
          border: "1px solid #ddd",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Title
            </th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Logo
            </th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Company Name
            </th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((application, index) => (
              <tr key={index}>
                <td style={{ padding: "10px" }}>{application.title}</td>
                <td style={{ padding: "10px" }}>
                  {application.company_logo ? (
                    <img
                      src={application.company_logo}
                      alt="Company Logo"
                      width="50"
                      height="50"
                    />
                  ) : (
                    <span>No Logo</span>
                  )}
                </td>
                <td style={{ padding: "10px" }}>{application.company}</td>
                <td style={{ padding: "10px" }}>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ padding: "10px" }}>
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
