
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import './AppLayout.css';
import StartPage from "../pages/startPage";
import VehicleCount from "../pages/VehicleCount";
import Fuel from "../pages/Fuel";
import Appliance from "../pages/Appliance";
import Electricity from "../pages/Electricity";
import Food from "../pages/Food";
import Summary from "../pages/Summary";
import PreForm from "../pages/PreForm";
import FormPage from "../pages/FormPage";
import Popup from "../pages/Popup";
import Driveweek from "../pages/Driveweek";
import Vehicles from "../pages/Vehicles";


function AppLayout() {
    return (
      <div className="router-page">
        <div className="routes">
          <Router>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/vehicle-count" element={<VehicleCount />} /> 
              <Route path="/fuel" element={<Fuel/>} /> 
              <Route path="/drive-week" element={<Driveweek />} />
              <Route path="/food" element={<Food />} />
              <Route path="/appliance" element={<Appliance />} />
              <Route path="/electricity" element={<Electricity />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/pre-form" element={<PreForm />} />
              <Route path="/form-page" element={<FormPage />} />
              <Route path="/popup" element={<Popup />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
  

  export default AppLayout;






// import * as React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';  // Use stable Grid
// import { styled } from '@mui/material/styles';
// import StartPage from "../pages/yogesh/startPage";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   height: '100%', // Ensures full height for grid items
//   display: 'flex',
//   alignItems: 'center',  // Vertically center content
//   justifyContent: 'center', // Horizontally center content
// }));

// function AppLayout() {
//   return (
//     <Box 
//       sx={{ 
//         flexGrow: 1, 
//         height: '100vh' // Set full height for the entire box
//       }}
//     >
//       <Grid 
//         container 
//         spacing={4} 
//         sx={{ height: '100%' }} // Ensure grid container takes full height
//       >
//         <Grid item xs />
//         <Grid item xs={4}>
//           <Item>
//             <div className="router-page">
//               <div className="routes">
//                 <Router>
//                   <Routes>
//                     <Route path="/" element={<StartPage />} />
//                     {/* Add other routes here */}
//                   </Routes>
//                 </Router>
//               </div>
//             </div>
//           </Item>
//         </Grid>
//         <Grid item xs />
//       </Grid>
//     </Box>
//   );
// }

// export default AppLayout;

