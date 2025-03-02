/* eslint-disable react/prop-types */
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router";

const HotJobsCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    _id,
    applicationDeadline,
    salaryRange,
    company,
  } = job;

  return (
    <div className="card w-full bg-white shadow-lg border border-gray-200 rounded-xl p-3">
      <motion.div
        whileHover={{
          scale: [null, 1, 1.1],
          transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="card-body"
      >
        <img
          src="https://i.ibb.co.com/7S36BCP/makeup-brush-eyeglasses-cactus-plant-white-flower-bouquet-with-laptop-blue-background.jpg"
          alt="logo"
          className="w-3xl rounded-md"
        />
        <h2 className="card-title text-xl font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-sm">{company}</p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {location}
          </span>
          <span className="flex items-center gap-1">
            <FaBriefcase /> {jobType}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> {applicationDeadline}
          </span>
          <span className="flex items-center gap-1">
            <FaMoneyBillWave /> {salaryRange}
          </span>
        </div>

        <div className="card-actions mt-4 flex items-center">
          <Link to={`/jobdetails/${_id}`} className="btn btn-primary w-full text-center text-white bg-cyan-300 py-2 px-3 rounded-md">
            Apply Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

HotJobsCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    category: PropTypes.string,
    applicationDeadline: PropTypes.string.isRequired,
    salaryRange: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default HotJobsCard;
