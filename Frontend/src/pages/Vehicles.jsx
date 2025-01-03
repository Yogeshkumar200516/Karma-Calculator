import React, { useState } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box'; // Import Box for layout
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';
import Bike from '../assets/images/bike_.png';
import Car from '../assets/images/car_.png';
import Cycle from '../assets/images/cycle_.png';
import '../Styles/Finish.css';
import '../Styles/global.css';


function Vehicles() {

  const [value, setvalue] = useState(100); 

  const valuechange = (e) =>
  {
    setvalue(e.target.value)
  }


  const navigate = useNavigate();


  return (
    <div className='Page-3'>

<div className='Page-Heder'> 
          <div className='trianglebox'>
            <div className="triangle"></div>
          </div>
          <div className='Readings'>7.6 ton C02</div>
      </div>

      <div className='Drive-Box'> 

        <div className='Drive-circle'>
            <div className='pecentage-circle'>
            <Box position="relative" display="inline-flex" >
      <CircularProgress
        color="warning"
        determinate
        sx={{ color: '#fea062' }} 
        size="lg"
        value={25}
        variant="solid"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: 'translate(-50%, -50%)' }} >
        <Typography>{`1/4`}</Typography>
      </Box>
    </Box>
            </div>
        </div>

        <div className='Drive-Head'>
        Choose the vehicles you use for commuting?
        </div>

        <div className='totalgrid'>
        <div className='image-container'>
                <div>
                    <img src={Cycle} alt="Bicycle"  style={{background:'transparent'}}/>
                    <p className='image-name'>Bicycle / <br/>Walk</p>
                </div>
                <div>
                    <img src={Bike} alt="" />
                    <p className='image-name' style={{marginTop: '5px'}}>Two wheeler</p>
                </div>
                <div>
                    <img src={Car} alt="" />
                    <p className='image-name' style={{marginTop: '3px', fontSize: '14px'}}>Car</p>
                </div>
            </div>
        </div>

        <div className='Drivebuttoncon'>
          <div className='Electricitybut'><button className='Drive-next' style={{height:'100%'}} onClick={()=>navigate('/vehicle-count')}>Next</button></div>
        </div>
      </div>
      
    </div>
  )
}

export default Vehicles;
