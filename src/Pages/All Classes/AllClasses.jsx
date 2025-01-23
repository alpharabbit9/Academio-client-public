import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

const AllClasses = () => {
  const axiosSecure = useAxiosSecure();

  // Fetching approved classes
  const { data: classes = [], isLoading, isError } = useQuery({
    queryKey: ["approvedClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/courses");
      return res.data.filter((course) => course.status === "approved");
    },
  });

  // Show loading state
  if (isLoading) {
    return <p>Loading classes...</p>;
  }

  // Show error state
  if (isError) {
    return <p>Failed to load classes.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {classes.map((singleClass) => (
        <div key={singleClass._id} className="card bg-base-100 shadow-lg p-4">
          <img
            src={singleClass.image}
            alt={singleClass.title}
            className="rounded-lg mb-4"
          />
          <h2 className="text-lg font-bold">{singleClass.title}</h2>
          <p className="text-sm">Instructor: {singleClass.instructorName}</p>
          <p className="text-sm">Price: ${singleClass.price}</p>
          <p className="text-sm">Enrolled: {singleClass.totalEnrollment}</p>
          <p className="text-sm mb-4">{singleClass.description}</p>
          {/* Link to class details page */}
          <Link to={`/class/${singleClass._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;
