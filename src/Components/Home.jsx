import React from 'react';
import img1 from '../assets/image/img1.png';
import img2 from '../assets/image/img2.png';
import img3 from '../assets/image/img3.png';
import img4 from '../assets/image/img4.png';
import img5 from '../assets/image/img5.png';
import img6 from '../assets/image/img6.png';
import img7 from '../assets/image/img7.png';
import img8 from '../assets/image/img8.png';


function Home() {
  return (
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
  );
}

export default Home;
