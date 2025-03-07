import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    axios
      .post("http://localhost:5000/jobs", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Job Posted Successfully!");
        reset();
        navigate("/mypostedjobs");
      })
      .catch((error) => {
        console.error("Failed to post job:", error);
        toast.error("Failed to post job. Try again.");
      });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <Link to="/" className="text-blue-500 underline mb-4 inline-block">
          Back to home
        </Link>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add New Job
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <label className="flex flex-col gap-2 text-gray-700">
            Job Title
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Job title"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>
          <label className="flex flex-col gap-2 text-gray-700">
            Job Location
            <input
              {...register("location", { required: true })}
              type="text"
              placeholder="Job Location"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>
          <label className="flex flex-col gap-2 text-gray-700">
            Company
            <input
              {...register("company", { required: true })}
              type="text"
              placeholder="Company"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>
          <label className="flex flex-col gap-2 text-gray-700">
            Job Category
            <input
              {...register("category", { required: true })}
              type="text"
              placeholder="Category (e.g., Engineering, IT, Marketing)"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>
          <label className="flex flex-col gap-2 text-gray-700">
            Application Deadline
            <input
              {...register("applicationDeadline", { required: true })}
              type="date"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>

          <label className="flex flex-col gap-2 text-gray-700">
            Job Type
            <select
              {...register("jobType", { required: true })}
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="intern">Intern</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </label>

          {/* Salary Range */}
          <div className="md:col-span-2">
            <label className="flex flex-col gap-2 text-gray-700">
              Salary Range
              <div className="flex gap-4">
                <input
                  {...register("salaryMin", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Min"
                  className="border border-gray-300 p-2 rounded w-full"
                />
                <input
                  {...register("salaryMax", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="Max"
                  className="border border-gray-300 p-2 rounded w-full"
                />
                <select
                  {...register("currency", { required: true })}
                  className="border border-gray-300 p-2 rounded w-full"
                >
                  <option value="USD">USD</option>
                  <option value="BDT">BDT</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </label>
          </div>

          {/* Image Upload */}
          <label className="flex flex-col gap-2 text-gray-700 md:col-span-2">
            Upload Company Logo
            <input
              {...register("companyLogo")}
              type="file"
              accept="image/*"
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleImageChange}
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover rounded border"
              />
            )}
          </label>

          {/* Job Description */}
          <div className="md:col-span-2">
            <label className="flex flex-col gap-2 text-gray-700">
              Job Description
              <textarea
                {...register("description", { required: true })}
                className="border border-gray-300 p-2 rounded w-full"
                rows="4"
                placeholder="Enter job description..."
              ></textarea>
            </label>
          </div>

          {/* Requirements */}
          <div className="md:col-span-2">
            <label className="flex flex-col gap-2 text-gray-700">
              Requirements (Each on a new line)
              <textarea
                {...register("requirements", { required: true })}
                className="border border-gray-300 p-2 rounded w-full"
                rows="3"
                placeholder="Requirement 1&#10;Requirement 2"
              ></textarea>
            </label>
          </div>

          {/* Responsibilities */}
          <div className="md:col-span-2">
            <label className="flex flex-col gap-2 text-gray-700">
              Responsibilities (Each on a new line)
              <textarea
                {...register("responsibilities", { required: true })}
                className="border border-gray-300 p-2 rounded w-full"
                rows="3"
                placeholder="Responsibility 1&#10;Responsibility 2"
              ></textarea>
            </label>
          </div>

          {/* HR Email */}
          <label className="flex flex-col gap-2 text-gray-700 md:col-span-2">
            HR Email
            <input
              {...register("hr_email", { required: true })}
              type="email"
              placeholder="HR Email"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>

          <button
            type="submit"
            className="md:col-span-2 bg-cyan-500 text-white p-2 rounded hover:bg-yellow-600 transition-all"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
