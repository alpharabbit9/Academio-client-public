import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setMessage("Please enter a valid email.");
    } else {
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear input after submission
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mt-2">
          Stay updated with our latest news and courses. Enter your email below.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 w-full md:w-96 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
