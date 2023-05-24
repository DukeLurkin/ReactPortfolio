import React from 'react';
import picture1 from "../../weatherscreenshot.png";
import picture2 from "../../eCommerceScreenShot.png";
import picture7 from "../../quizScreenShot.png";
import picture4 from "../../calendarScreenShot.png";
import picture5 from "../../bucketListScreenShot.png";
import picture6 from "../../noteTakerScreenShot.png";
import "../../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <h3>
        Click on a picture to go to App
      </h3>
      
        <div className='container text-center'>
          <div className='row justify-content-md-center mx-auto'>
            <div className='col-md-4'>
              <h4>WeatherApp</h4>
            <a href="https://dukelurkin.github.io/WeatherAboveGround">
              <img src={picture1}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Ecommerce</h4>
            <a href="https://github.com/DukeLurkin/eCommerce">
              <img src={picture2}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>BucketList</h4>
            <a href="https://pacific-beach-42449.herokuapp.com/">
            <img src={picture5}></img>
            </a>
            </div>
          </div>
          <div className='row justify-content-md-center mx-auto'>
            <div className='col-md-4'>
            <h4>Quiz</h4>
            <a href="https://dukelurkin.github.io/quiz/">
              <img src={picture7}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Calendar</h4>
            <a href="https://dukelurkin.github.io/calendar/">
              <img src={picture4}></img>
              </a>
            </div>
            <div className='col-md-4'>
            <h4>Note Taker</h4>
            <a href="https://dukelurkin.github.io/noteTaker">
            <img src={picture6}></img>
            </a>
            </div>
          </div>
        </div>
    
    </div>
  );
}
