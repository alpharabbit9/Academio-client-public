import React from "react";
import teacher from "../../assets/Partners/teacher.png";
import { Link } from "react-router-dom";

const JoinAsTeacher = () => {
    return (
        <section className="relative  py-12 rounded-3xl">
            {/* Overlay with opacity */}
            <div className="absolute inset-0 bg-blue-600 opacity-60 rounded-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-lg -z-10 w-4/5 h-4/5 left-6 top-6"></div>
                        <img
                            src={teacher}
                            alt="Join as Teacher"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="text-white">
                        <h2 className="text-4xl font-bold">Become an Instructor</h2>
                        <p className="mt-4 text-lg">
                            Share your knowledge with students worldwide. We provide the tools
                            and platform to help you teach with ease.
                        </p>
                        <Link to={'/teacherForm'}>
                            <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                                Start Teaching Today
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinAsTeacher;
