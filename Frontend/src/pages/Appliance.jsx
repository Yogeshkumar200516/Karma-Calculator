import React, { useState } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box'; // Import Box for layout
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';


function Appliance() {
    const [selectedItems, setSelectedItems] = useState([]);

    const navigate = useNavigate();
  
    const AppliancesProducts = [
      {
        id: 1,
        name: "Fridge",
        borderColor: "#3ea957",
        backgroundColor: "#E4FFEE",
      },
      { id: 2, name: "AC", borderColor: "#FFBA63", backgroundColor: "#FFF4E6" },
      {
        id: 3,
        name: "Chimney",
        borderColor: "#EB7E74",
        backgroundColor: "#FFF4F3",
      },
      {
        id: 4,
        name: "Washing machine",
        borderColor: "#EF9BC5",
        backgroundColor: "#F9F5F7",
      },
      {
        id: 5,
        name: "Electric Vehicles",
        borderColor: "violet",
        backgroundColor: "#FCF5FF",
      },
      {
        id: 6,
        name: "Air cooler",
        borderColor: "skyblue",
        backgroundColor: "#E4FBFF",
      },
      {
        id: 7,
        name: "Mixer/ Grinder",
        borderColor: "#EB7E74",
        backgroundColor: "#FFF4F3",
      },
    ];
  
    const handleItemClicked = (itemId) => {
      setSelectedItems((prevSelected) => {
        if (prevSelected.includes(itemId)) {
          return prevSelected.filter((id) => id !== itemId);
        } else {
          return [...prevSelected, itemId];
        }
      });
    };
  
    React.useEffect(() => {
      console.log("Selected items:", selectedItems);
    }, [selectedItems]);

  return (
    <div className='Appliance-Img'>

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
        value={75}
        variant="solid"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: 'translate(-50%, -50%)' }} // Center the text
      >
        <Typography>{`3/4`}</Typography>
      </Box>
    </Box>
            </div>
        </div>

        <div className='Drive-Head'>
        Select the appliances your use at your home
        </div>
        <div className="appliance-products">
          {AppliancesProducts.map((item) => (
            <div
              key={item.id}
              className={`appliance-items ${
                selectedItems.includes(item.id) ? "selected" : ""
              }`}
              onClick={() => handleItemClicked(item.id)}
              style={{
                backgroundColor: item.backgroundColor,
                borderColor: selectedItems.includes(item.id)
                  ? item.borderColor
                  : "transparent",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <div style={{ fontWeight: "500", fontSize: "14px" }}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
   

        <div className='Drivebuttoncon'>
          <div className='drivebuuton'><button className='Drive-back' onClick={()=>navigate('/food')}>Back</button></div>
          <div className='drivebuuton'><button className='Drive-next' onClick={()=>navigate('/electricity')}>Next</button></div>
        </div>
      </div>
    </div>
  )
}

export default Appliance;
