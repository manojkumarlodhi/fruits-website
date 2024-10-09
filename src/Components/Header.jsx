import React from 'react';
import "../Css/Header.css";
import watermelon from '../assets/image/watermelon.webp';
import banana from '../assets/image/banana.png';
import papaya from '../assets/image/papaya.webp';
import orange from '../assets/image/orange.png';
import strawbery from '../assets/image/strawbery.png';
import apple from '../assets/image/apple.png';
import logo from '../assets/image/logo(1).png';
import { CgMail } from "react-icons/cg";
import { CiLogin } from "react-icons/ci";
import { PiTrolleySuitcaseFill } from "react-icons/pi";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
  const images = [
    { src: watermelon, name: 'WATERMELON' },
    { src: banana, name: "BANANA" },
    { src: papaya, name: "PAPAYA" },
    { src: orange, name: "ORANGE" },
    { src: strawbery, name: "STRAWBERY" },
    { src: apple, name: "APPLE" }
  ];

  return (
   <>
    <div className="main">
      {images.map((image, index) => (
        <div className="image-container" >
          <img src={image.src} alt='' />
          <span>{image.name}</span>
        </div>
      ))}
    </div>
    <div className="first">
      <div className="second">
          <div className="logo">
              <img src={logo} alt="logo" />

          </div>
          <div className="feature">
             <p><CgMail />manojlodhi0262@gmail.com</p>
              <Link to="/login"><p><CiLogin />login</p></Link>
              <button><PiTrolleySuitcaseFill />0 item</button>

          </div>
      </div>
      <div className="second1">
      <Link to=''><button><span><FaBarsStaggered /></span>CATEGORIS</button></Link>
       <ul>
        <li>
        
        <Link to=''>Home</Link>
        <Link to=''>Fresh fruit</Link>
        <Link to=''>Immunity Booster</Link>
        <Link to=''>Dry Fruit</Link>
        <Link to=''>Contact</Link>
        </li>
       </ul>
       <div className="serch"><input type="text"  placeholder='Search Our Catalog ' /><span><CiSearch /></span>
       </div>


      </div>
    </div>
   </>
  );
}

export default Header;
