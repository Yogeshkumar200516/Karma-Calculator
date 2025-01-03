import React, { useState } from 'react'
import '../Styles/Driveweek.css'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box'; // Import Box for layout
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';
import '../Styles/Driveweek.css';


function Driveweek() {

  const [value, setvalue] = useState(10); 

  const valuechange = (e) =>
  {
    setvalue(e.target.value)
  }

  const navigate = useNavigate()



  return (
    <div className='Drive-week'>

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
        determinate
        size="lg"
        color='warning'
        sx={{ color: 'red' }} 
        value={25}
        variant="solid"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: 'translate(-50%, -50%)' }} // Center the text
      >
        <Typography>{`1/4`}</Typography>
      </Box>
    </Box>
            </div>
        </div>

        <div className='Drive-Head'>
        How many kilometers you drive per week ?
        </div>

        <div className='Drive-Slide'>
          <div className='rangeside'></div>
          <div className='rangesie'><input type="range"  min="10" onChange={valuechange} max="250" className='driverange' /></div>
          <div className='rangeside'></div>
        </div>
        <div className='Drive-reange'>
            <div className='rangebarval'>10 km</div>
            <div className='rangebarval'>250 km</div>
        </div>

        <div className='Drive-sppedbox'>

          <div className='speedbox'>
            {value} km
          </div>

        </div>

        <div className='emptypage'></div>

        <div className='Drivebuttoncon'>
          <div className='drivebuuton'><button className='Drive-back' onClick={()=>navigate('/fuel')}>Back</button></div>
          <div className='drivebuuton'><button className='Drive-next' onClick={()=>navigate('/food')}>Next</button></div>
        </div>
      </div>
    </div>
  )
}

export default Driveweek
