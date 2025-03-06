import { Link } from "react-router";
import { useState } from "react";

const AddJob = () => {
  const [image, setImage] = useState(null);

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
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2 text-gray-700">
            Job Title
            <input
              type="text"
              placeholder="Job title"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>
          <label className="flex flex-col gap-2 text-gray-700">
            Job Location
            <input
              type="text"
              placeholder="Job Location"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>
          <label className="flex flex-col gap-2 text-gray-700">
            Company
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>
          <label className="flex flex-col gap-2 text-gray-700">
            Date
            <input
              type="date"
              className="border border-gray-300 p-2 rounded w-full"
            />
          </label>

          <label className="flex flex-col gap-2 text-gray-700">
            Job Type
            <select className="border border-gray-300 p-2 rounded w-full">
              <option value="" disabled selected>
                Pick a Job Type
              </option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="intern">Intern</option>
            </select>
          </label>

          {/* Salary Range Section */}
          <div className="md:col-span-2">
            <label className="flex flex-col gap-2 text-gray-700">
              Salary Range
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="border border-gray-300 p-2 rounded w-full"
                  required
                />
                <select className="border border-gray-300 p-2 rounded w-full">
                  <option value="USD">USD</option>
                  <option value="BDT">BDT</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                </select>
              </div>
            </label>
          </div>

          {/* Image Upload Input */}
          <label className="flex flex-col gap-2 text-gray-700 md:col-span-2">
            Upload Company Logo
            <input
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

          <div className="md:col-span-2">
            <label className="flex flex-col gap-2 text-gray-700">
              Job Description
              <textarea
                className="border border-gray-300 p-2 rounded w-full"
                rows="5"
                placeholder="Enter job description..."
              ></textarea>
            </label>
          </div>
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
