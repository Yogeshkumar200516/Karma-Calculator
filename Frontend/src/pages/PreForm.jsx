
import React, { useEffect, useState } from 'react';
import '../Styles/midhun.css';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/images/Page-13.png'

const PreForm = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      const navigatetimer=setTimeout(()=>{
        navigate('/form-page');
    }, 4000)
    return ()=>clearTimeout(navigatetimer)
  }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="mobile-view">
        <img src={Image} alt="Background" className="bg-img" />

        
        <div className=  {`para ${animate ? 'animate' : ''}`}>
            <p>
                Great job! You're making a positive
                contribution to preserving our<br/>
                green environment.
            </p>
        </div>
              
    </div>
  );
};

export default PreForm;