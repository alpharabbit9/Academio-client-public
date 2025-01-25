import React, { useEffect, useState } from "react";

const FeedbackSection = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch("https://acadmia-server.vercel.app/reviews")
            .then((response) => response.json())
            .then((data) => setFeedbacks(data))
            .catch((error) => console.error("Error fetching feedbacks:", error));
    }, []);

    return (
        <div className="feedback-section py-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Teacher Feedback</h2>
            <div className="carousel w-full max-w-3xl mx-auto">
                {feedbacks.map((feedback, index) => (
                    <div
                        key={index}
                        id={`slide${index}`}
                        className="carousel-item w-full flex flex-col items-center justify-center"
                    >
                        <div className="p-6 bg-white shadow-md rounded-lg text-center w-3/4">
                            <img
                                src={feedback.image}
                                alt={feedback.name}
                                className="w-20 h-20 rounded-full mx-auto"
                            />
                            <h3 className="text-lg font-semibold mt-4">{feedback.name}</h3>
                            <p className="text-gray-500">{feedback.title}</p>
                            <p className="text-gray-700 mt-4">{feedback.feedback}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-4 gap-4">
                {feedbacks.map((_, index) => (
                    <a
                        key={index}
                        href={`#slide${index}`}
                        className="btn btn-xs btn-circle"
                    >
                        {index + 1}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FeedbackSection;
