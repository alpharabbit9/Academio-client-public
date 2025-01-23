import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure";

const ClassDetailPage = () => {
    const { id } = useParams(); // Get the ID from the URL
    const axiosSecure = useAxiosSecure();

    // Fetch class details by ID
    const { data: singleClass, isLoading, isError } = useQuery({
        queryKey: ["classDetails", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/courses/${id}`);
            return res.data;
        },
    });

    // Show loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    // Show error state
    if (isError) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-error text-lg">Failed to load class details.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16 bg-gray-100">
            {/* Card Layout */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                {/* Class Image */}
                <figure className="lg:w-1/2">
                    <img
                        src={singleClass.image}
                        alt={singleClass.title}
                        className="rounded-lg"
                    />
                </figure>
                {/* Class Details */}
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-3xl font-bold mb-4">
                        {singleClass.title}
                    </h2>
                    <p className="text-lg font-semibold mb-2">
                        Instructor:{" "}
                        <span className="font-normal text-base">{singleClass.instructorName}</span>
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        Price:{" "}
                        <span className="font-normal text-base">${singleClass.price}</span>
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        Enrolled:{" "}
                        <span className="font-normal text-base">
                            {singleClass.totalEnrollment}
                        </span>
                    </p>
                    <p className="text-base leading-relaxed mb-4">
                        {singleClass.description}
                    </p>
                    {/* Action Button */}
                    <div className="card-actions justify-end">
                        <Link
                            to="/payment"
                            state={{ price: singleClass.price }} // Pass price to the payment page
                        >
                            <button className="btn btn-primary px-6 rounded-3xl">Pay</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetailPage;
