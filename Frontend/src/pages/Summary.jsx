import React from 'react';  
import summary from '../assets/images/brown-bg.png'
import tree from '../assets/images/tree.png'
import meter from '../assets/images/meter.png'
import { SlGraph } from "react-icons/sl";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { useNavigate } from 'react-router-dom';


const Summary = () => {

    const navigate = useNavigate();
  return (
    <div className="mobile-view">
        <img src={summary} alt="Background" className="bg-img" />  // Background image reinstated
        <p className='summary-heading'>Summary</p>
        <div className='summary-container'>

            <div className='carbon-footprint'>
                <p className='annual-carbon'>Your annual carbon footprint</p>

                <div className="meter-container">
                     <img src={meter} alt="Meter" className="meter" />
                    <p className="ton">18 ton CO2</p>                                       
                </div>

                <div className='commute-food-appliances'>
                    <div className='commute'>
                       <div className='orange'></div><p>Commute</p>
                    </div>
                    <div className='food'>
                       <div className='pink'></div><p>Food</p>
                    </div>
                    <div className='appliance'>
                       <div className='green'></div><p>Appliances</p>
                    </div>
                </div>
                    <div className='summary-score'>
                       <SlGraph className='graph'/>
                        <p> Which is 25% higher than average</p>
                    </div>
                </div>

            <div className='plant-now'>
                <img src={tree} alt="" className='tree-img' />
                <p className='offset'>Offset your excess carbon footprint by</p>
                <p className='planting-saplings'>Planting 15 Saplings</p>
                <button className='summary-button' onClick={()=>navigate('/pre-form')}>Plant now to offset</button>
            </div>
            <p className='remind-later'>Remind me later</p>
        </div>
    </div>
  );
};

export default Summary;