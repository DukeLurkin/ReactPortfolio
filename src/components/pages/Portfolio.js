import React from 'react';
import picture1 from "../../jackhandy1.jpg";
import picture2 from "../../jackhandy2.jpg";
import picture7 from "../../jackhandy7.png";
import picture4 from "../../jackhandy4.jpg";
import picture5 from "../../jackhandy5.jpg";
import picture6 from "../../jackhandy6.jpg";
import "../../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
      </p>
      
        <div className='container text-center'>
          <div className='row justify-content-md-center mx-auto'>
            <div className='col-md-4'>
              <h4>WeatherApp</h4>
            <a href="https://github.com/DukeLurkin?tab=repositories">
              <img src={picture1}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Ecommerce</h4>
            <a href="https://github.com/DukeLurkin?tab=repositories">
              <img src={picture2}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>BucketList</h4>
            <a href="https://github.com/DukeLurkin?tab=repositories">
            <img src={picture5}></img>
            </a>
            </div>
          </div>
          <div className='row justify-content-md-center mx-auto'>
            <div className='col-md-4'>
            <h4>SocialNetworkAPI</h4>
            <a href="https://github.com/DukeLurkin?tab=repositories">
              <img src={picture7}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Calendar</h4>
            <a href="https://github.com/DukeLurkin?tab=repositories">
              <img src={picture4}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Note Taker</h4>
            <a href="https://github.com/DukeLurkin?tab=repositories">
            <img src={picture6}></img>
            </a>
            </div>
          </div>
        </div>
    
    </div>
  );
}
