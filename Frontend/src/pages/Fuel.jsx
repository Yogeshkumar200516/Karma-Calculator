import React, { useState } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box'; // Import Box for layout
import Typography from '@mui/joy/Typography';
import Fuelicon from '../assets/images/Fuel.png';
import Electric from '../assets/images/Electric.png';
import { useNavigate } from 'react-router-dom';


function Fuel() {
    const [selectedItem, setSelectedItem] = useState(null);

    const navigate = useNavigate();
    const FoodProducts = [
      {
        id: 1,
        name: "Petrol/Diesel",
        img: Fuelicon,
        borderColor: "red",
        backgroundColor: "#fff4e6",
        size: "2.3vw"
      },
      {
        id: 2,
        name: "Electric Vehicle",
        img: Electric,
        borderColor: "#FFBA63",
        backgroundColor: "#fff4e6",
        size: "1.5vw"
      },
    ];

    const handleItemClicked = (itemId) => {
        setSelectedItem((prevSelected) =>
          prevSelected === itemId ? null : itemId
        );
      };
    
      React.useEffect(() => {
        console.log("Selected item:", selectedItem);
      }, [selectedItem]);

  return (
    <div className='Fuel-Img' >

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
        What type of Vehicle do you use?
        </div>

        <div className="fuelbox">
            {FoodProducts.map((item) => (
              <div
                key={item.id}
                className={`fuelitem ${
                  selectedItem === item.id ? "selected" : ""
                }`}
                onClick={() => handleItemClicked(item.id)}
                style={{
                  backgroundColor: item.backgroundColor,
                  borderColor:
                    selectedItem === item.id ? item.borderColor : "transparent",
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
              >
                <img src={item.img} style={{ width: item.size }} alt={item.name} />
                <div style={{ fontWeight: "420", fontSize: "14px", marginTop: '10px' }}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>

        <div className='Drivebuttoncon'>
          <div className='drivebuuton'><button className='Drive-back' onClick={()=>navigate('/vehicle-count')}>Back</button></div>
          <div className='drivebuuton'><button className='Drive-next' onClick={()=>navigate('/drive-week')}>Next</button></div>
        </div>
      </div>
      
    </div>
  )
}

export default Fuel;
