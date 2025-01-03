import React from 'react';
import '../Styles/StartPage.css';
import image1 from '../assets/images/image1.svg';
import image2 from '../assets/images/image2.svg';
import image3 from '../assets/images/image3.svg';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="start-container">
      <div className='heading-text'>
        <h2>
          Know & offset your carbon footprints!
        </h2>
      </div>
      <div className='main-grid'>
        <div className='main-contents'>
          <div className='main-content'>
            <img src={image1} className='main-image' style={{height: '60px', width: '60px'}} />
            <div className='contents'>
              <h3>Answer our questions</h3>
              <p>estibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc malesuada euismod et vitae ipsum.</p>
            </div>
          </div>
          <div className='main-content'>
            <img src={image2} className='main-image' style={{height: '60px', width: '60px'}} />
            <div className='contents'>
              <h3>Know your carbon footprint</h3>
              <p>estibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc malesuada euismod et vitae ipsum.</p>
            </div>
          </div>
          <div className='main-content'>
            <img src={image3} className='main-image' style={{height: '60px', width: '60px'}} />
            <div className='contents'>
              <h3>Offset it by following the instructions</h3>
              <p>estibulum venenatis fringilla lorem eu finibus. Donec ac nulla nec nunc malesuada euismod et vitae ipsum.</p>
            </div>
          </div>
          {/* Add buttons here */}
          <div className="button-container">
            <button className="custom-button" style={{backgroundColor: '#E6EEFA', color: '#0E70EB'}}>Later</button>
            <button className="custom-button" style={{backgroundColor: '#0E70EB', color: '#E6EEFA'}} onClick={()=>navigate('/vehicles')}>Calculate & offset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
