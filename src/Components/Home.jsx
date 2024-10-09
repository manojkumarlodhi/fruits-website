import React from 'react';
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




function Home() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={img} className="d-block w-full h-[80vh] object-cover" alt={`img${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev rounded-full p-2" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-green-600 rounded-full" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next rounded-full p-2" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-green-600 rounded-full" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text-center text-4xl font-bold p-4 m-4">LATEST FRUIT</div>
      <div className="flex flex-wrap item-center justify-center w-[90%] gap-24 mx-auto">
  <div className="flex">
    <div className="">
      <img src={waterImg} alt="water" className='w-32' />
    </div>
    <div>
      <p>Water Chestnut</p>
      <p>Green</p>
      <p>Rs. 600.00</p>
      <div className='relative group flex gap-3 text-2xl'>
        <IoEyeSharp className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100 group-active:text-black' />
        <FaHeart className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-300 group-active:text-black' />
        <PiTrolleyFill className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-500 group-active:text-black' />
      </div>
    </div>
  </div>

  <div className="flex">
    <div className="img">
      <img src={longan} alt="longan" className='w-32' />
    </div>
    <div>
      <p>Longan -</p>
      <p>imported</p>
      <p>Rs. 600.00</p>
      <div className='relative group flex gap-3 text-2xl'>
        <IoEyeSharp className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100 group-active:text-black' />
        <FaHeart className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-300 group-active:text-black' />
        <PiTrolleyFill className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-500 group-active:text-black' />
      </div>
    </div>
  </div>

  <div className="flex">
    <div className="img">
      <img src={guava} alt="guava" className='w-32' />
    </div>
    <div>
      <p>Pink Guava -</p>
      <p>Imported</p>
      <p>Rs. 600.00</p>
      <div className='relative group flex gap-3 text-2xl'>
        <IoEyeSharp className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100 group-active:text-black' />
        <FaHeart className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-300 group-active:text-black' />
        <PiTrolleyFill className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-500 group-active:text-black' />
      </div>
    </div>
  </div>

  <div className="flex">
    <div className="img">
      <img src={rambutan} alt="rambutan" className='w-32' />
    </div>
    <div>
      <p>Rambutan -</p>
      <p>Imported</p>
      <p>Rs.600.00</p>
      <div className='relative group flex gap-3 text-2xl'>
        <IoEyeSharp className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-100 group-active:text-black' />
        <FaHeart className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-300 group-active:text-black' />
        <PiTrolleyFill className='bg-green-500 text-white p-1 rounded-full text-3xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-500 group-active:text-black' />
      </div>
    </div>
  </div>
</div>


    </>

  );
}

export default Home;
