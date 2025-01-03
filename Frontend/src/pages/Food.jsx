import React, { useState } from 'react'
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/joy/Box'; // Import Box for layout
import Greens from "../assets/images/LeafyGreen.png";
import Oden from "../assets/images/Oden.png";
import PoultryLeg from "../assets/images/PoultryLeg.png";
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';


function Food() {

    const [selectedItem, setSelectedItem] = useState(null);

    const FoodProducts = [
      {
        id: 1,
        name: "Veg",
        img: Greens,
        borderColor: "#3ea957",
        backgroundColor: "#E4FFEE",
      },
      {
        id: 2,
        name: "Both",
        img: Oden,
        borderColor: "#FFBA63",
        backgroundColor: "#FFF4E6",
      },
      {
        id: 3,
        name: "Non veg",
        img: PoultryLeg,
        borderColor: "#EB7E74",
        backgroundColor: "#FFF4F3",
      },
    ];
  
    const handleItemClicked = (itemId) => {
      setSelectedItem((prevSelected) =>
        prevSelected === itemId ? null : itemId
      );
    };
  
    const navigate = useNavigate();
    React.useEffect(() => {
      console.log("Selected item:", selectedItem);
    }, [selectedItem]);

 

  return (
    <div className='Food-Img'>

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
        value={50}
        variant="solid"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: 'translate(-50%, -50%)' }} // Center the text
      >
        <Typography>{`2/4`}</Typography>
      </Box>
    </Box>
            </div>
        </div>

        <div className='Drive-Head'>
        What do you normally eat?
        </div>
        <div className="food-products">
          {FoodProducts.map((item) => (
            <div
              key={item.id}
              className={`food-items ${
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
              <img src={item.img} style={{ width: "2.5vw" }} alt={item.name} />
              <div style={{ fontWeight: "420", fontSize: "14px" }}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      

        <div className='Drivebuttoncon'>
          <div className='drivebuuton'><button className='Drive-back' onClick={()=>navigate('/drive-week')}>Back</button></div>
          <div className='drivebuuton'><button className='Drive-next' onClick={()=>navigate('/appliance')}>Next</button></div>
        </div>
      </div>
      
    </div>
  )
}

export default Food;
