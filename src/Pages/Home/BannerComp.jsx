"use client";

import { Carousel } from "flowbite-react";
import img1 from '../../assets/banner1.png';
import img2 from '../../assets/banner6.jpeg';
import img3 from '../../assets/banner3.png';
import img4 from '../../assets/banner4.png';

export function BannerComp() {
  return (
    <div className="relative h-56 sm:h-64 lg:min-h-screen">
     
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

    
      <Carousel slideInterval={5000} className="relative z-20">
        <img src={img4} alt="Banner 1" />
        <img src={img1} alt="Banner 2" />
        <img src={img2} alt="Banner 3" />
        <img src={img3} alt="Banner 4" />
      </Carousel>

      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30">
        <h1 className="text-4xl font-extrabold text-white">Transforming Learning Experiences</h1>
        <p className="mt-2 text-lg text-gray-300">Empowering Students and Educators with Next-Gen Tools</p>
      </div>
    </div>
  );
}
