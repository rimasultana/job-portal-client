import { useLoaderData } from "react-router";

const ViewApplication = () => {
  const applications = useLoaderData(); // Renamed to 'applications' for clarity
  console.log(applications);

  return (
    <div>
      <h1>View Applications ({applications.length})</h1>
      {applications.length > 0 ? (
        applications.map((application) => (
          <div key={application._id}>
            <p>Job ID: {application.job_id}</p>
            <p>User ID: {application.user_id}</p>
            <p>Status: {application.status}</p>
          </div>
        ))
      ) : (
        <p>No applications found for this job.</p>
      )}
    </div>
  );
};

export default ViewApplication;
