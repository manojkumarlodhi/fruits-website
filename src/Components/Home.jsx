import React, { useState, useEffect } from 'react';
import img1 from '../assets/image/img1.png';
import img2 from '../assets/image/img2.png';
import img3 from '../assets/image/img3.png';
import img4 from '../assets/image/img4.png';
import img5 from '../assets/image/img5.png';
import img6 from '../assets/image/img6.png';
import img7 from '../assets/image/img7.png';
import img8 from '../assets/image/img8.png';
import waterImg from '../assets/image/Water.webp';
import longan from '../assets/image/LONGAN.webp';
import guava from '../assets/image/PinkGuava.webp';
import rambutan from '../assets/image/Rambutan.webp';
import { IoEyeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { PiTrolleyFill } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Home() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

   const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); 
    }
    return () => clearInterval(interval); 
  }, [currentIndex, isHovered]);

  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='relative h-[80vh] overflow-hidden'>
          <div
            className='flex transition-transform duration-1000 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="object-cover w-full h-full"
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

       
        <button
          onClick={prevSlide}
          className='bg-green-500 rounded-full p-3 text-white focus:outline-none absolute top-1/2 left-8 hover:bg-black hover:text-white transition-all duration-300 transform -translate-y-1/2'
        >
          <FaArrowLeft className="text-xl" />
        </button>

        
        <button
          onClick={nextSlide}
          className='bg-green-500 rounded-full p-3 text-white focus:outline-none absolute top-1/2 right-8 hover:bg-black hover:text-white transition-all duration-300 transform -translate-y-1/2'
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>

      <div className="text-center text-4xl font-bold p-4 m-3">LATEST FRUIT</div>
      <div className="flex flex-wrap item-center justify-center w-[90%] gap-24 mx-auto">
        <div className="flex">
          <div>
            <img src={waterImg} alt="Water Chestnut" className='w-32' />
          </div>
          <div>
            <p>Water Chestnut</p>
            <p>Green</p>
            <p>Rs. 600.00</p>
            <div className='relative group flex gap-3 text-2xl'>
              <IoEyeSharp className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100 group-active:text-black hover:bg-black hover:text-red' />
              <FaHeart className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-300 group-active:text-black hover:bg-black hover:text-red' />
              <PiTrolleyFill className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-500 group-active:text-black hover:bg-black hover:text-red' />
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src={longan} alt="Longan" className='w-32' />
          </div>
          <div>
            <p>Longan -</p>
            <p>Imported</p>
            <p>Rs. 600.00</p>
            <div className='relative group flex gap-3 text-2xl'>
              <IoEyeSharp className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100 group-active:text-black hover:bg-black hover:text-white' />
              <FaHeart className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-300 group-active:text-black hover:bg-black hover:text-white' />
              <PiTrolleyFill className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-500 group-active:text-black hover:bg-black hover:text-white' />
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src={guava} alt="Pink Guava" className='w-32' />
          </div>
          <div>
            <p>Pink Guava -</p>
            <p>Imported</p>
            <p>Rs. 600.00</p>
            <div className='relative group flex gap-3 text-2xl'>
              <IoEyeSharp className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100 group-active:text-black hover:bg-black hover:text-white' />
              <FaHeart className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-300 group-active:text-black hover:bg-black hover:text-white' />
              <PiTrolleyFill className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-500 group-active:text-black hover:bg-black hover:text-white' />
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src={rambutan} alt="Rambutan" className='w-32' />
          </div>
          <div>
            <p>Rambutan -</p>
            <p>Imported</p>
            <p>Rs. 600.00</p>
            <div className='relative group flex gap-3 text-2xl'>
              <IoEyeSharp className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100 group-active:text-black hover:bg-black hover:text-white' />
              <FaHeart className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-300 group-active:text-black hover:bg-black hover:text-white' />
              <PiTrolleyFill className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-500 group-active:text-black hover:bg-black hover:text-white' />
            </div>
          </div>
        </div>
      </div>

      <div className='text-center text-4xl font-bold p-4 m-4'>PREMIUM FRUITS</div>
    </>
  );
}

export default Home;
