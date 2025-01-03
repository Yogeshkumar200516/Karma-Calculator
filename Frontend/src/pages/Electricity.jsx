import React, { useState } from 'react'
import '../Styles/Driveweek.css'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box'; // Import Box for layout
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';


function Electricity() {

  const [value, setvalue] = useState(100); 

  const valuechange = (e) =>
  {
    setvalue(e.target.value)
  }


  const navigate = useNavigate();


  return (
    <div className='Electirict-week'>

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
        value={100}
        variant="solid"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: 'translate(-50%, -50%)' }} >
        <Typography>{`4/4`}</Typography>
      </Box>
    </Box>
            </div>
        </div>

        <div className='Drive-Head'>
        How much electricity do you consume for a <br />
month?
        </div>

        <div className='Drive-Slide'>
          <div className='rangeside'></div>
          <div className='rangesie'><input type="range"  min="100" onChange={valuechange} max="1000" className='driverange' /></div>
          <div className='rangeside'></div>
        </div>
        <div className='Drive-reange' style={{alignItems:'start'}}>
            <div className='rangebarval' style={{ width:'max-content'}}>100 units</div>
            <div className='rangebarval' style={{width:'max-content'}}>1000 units</div>
        </div>

        <div className='Drive-sppedbox'>

          <div className='speedbox' style={{width: '25%'}}>
            {value} units
          </div>

        </div>

        <div className='emptypage'></div>

        <div className='Drivebuttoncon'>
          <div className='Electricitybut'><button className='Drive-next' onClick={()=>navigate('/summary')}>Calculate carbon footprint</button></div>
         
        </div>
      </div>
      
    </div>
  )
}

export default Electricity
