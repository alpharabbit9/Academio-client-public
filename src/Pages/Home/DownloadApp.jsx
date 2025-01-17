import React from "react";
import iphone from '../../assets/Partners/ip.webp'
import { FaGooglePlus } from "react-icons/fa";
import  './CSS/Background.css'


const DownloadApp = () => {
    return (
        <section className="relative background min-h-40 py-24 px-20">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Side - Text & Buttons */}
                

                {/* Right Side - App Mockup */}
                <div className="flex justify-center">
                    <img  src={iphone} alt="App Preview" className="w-72 md:w-full rounded-3xl shadow-lg" />
                </div>

                <div className="text-white">
                    <h2 className="text-4xl font-bold mb-4">Download & Enjoy</h2>
                    <p className="text-lg mb-6">
                        Access your courses anywhere, anytime & prepare with practice tests.
                    </p>

                    <div className="flex gap-4">
                        {/* App Store Button */}
                        <a
                            href="#"
                            className="flex items-center bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                        >
                            <i className="fab fa-apple text-2xl mr-2"></i> App Store
                        </a>

                        {/* Google Play Button */}
                        <a
                            href="#"
                            className="flex items-center bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                        >
                            <i className="fab > text-2xl mr-2"></i> <FaGooglePlus className="ml-2" /> Google Play
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
