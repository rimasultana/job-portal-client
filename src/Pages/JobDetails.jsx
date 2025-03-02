import { useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="w-[50%] mx-auto py-10 ">
    <div className="card w-full bg-white shadow-lg border border-gray-200 rounded-xl py-10 px-5">
      <img 
        src={job.company_logo} 
        alt={`${job.company} logo`} 
        className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
      />
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{job.title}</h1>
      <p className="text-lg text-gray-600 text-center mb-4">Company: {job.company}</p>

      <div className="flex flex-wrap justify-between text-gray-500 text-sm mb-4">
        <div className="flex items-center gap-1">
          <span className="font-semibold">Location:</span> {job.location}
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">Job Type:</span> Mern Stack
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">Deadline:</span> 30-12-26
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">Salary Range:</span> 5-15K
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="btn btn-primary bg-cyan-400 py-2 px-4 rounded-md text-white font-bold">
          Apply Now
        </button>
      </div>
    </div>
  </div>
  );
};

export default JobDetails;
