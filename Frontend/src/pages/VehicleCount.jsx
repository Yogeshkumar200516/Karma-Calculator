import React, { useState } from 'react'
import '../Styles/Driveweek.css'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box'; // Import Box for layout
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';

function VehicleCount() {
  const [value, setvalue] = useState(2); 
  const valuechange = (e) =>
  {
    setvalue(e.target.value)
  }

 const navigate = useNavigate();

  return (
    <div className='Vehcile-Img'>

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
        size="lg"
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
        How many vehicles do you own?
        </div>

        <div className='Drive-Slide'>
          <div className='rangeside'></div>
          <div className='rangesie'><input type="range"    min="2" onChange={valuechange} max="10" className='driverange' /></div>
          <div className='rangeside'></div>
        </div>
        <div className='Drive-reange'>
            <div className='vehicrangebarval'>2</div>
            <div className='vehicrangebarval'>4</div>
            <div className='vehicrangebarval'>6</div>
            <div className='vehicrangebarval'>8</div>
            <div className='vehicrangebarval'>10</div>
            
        </div>

        <div className='Drive-sppedbox'>

          <div className='speedbox' style={{width: '28%'}}>
            {value} Vehicle
          </div>

        </div>

        <div className='emptypage'></div>

        <div className='Drivebuttoncon'>
          <div className='drivebuuton'><button className='Drive-back' onClick={()=>navigate('/vehicles')}>Back</button></div>
          <div className='drivebuuton'><button className='Drive-next' onClick={()=>navigate('/fuel')}>Next</button></div>
        </div>
      </div>
    </div>
  )
}

export default VehicleCount;
