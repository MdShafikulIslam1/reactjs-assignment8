import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';

const Gyms = () => {
    const [gyms,setGyms] =useState([]);
    useEffect(() =>{
        fetch(`data.json`)
        .then(res => res.json())
        .then(data =>setGyms(data))
    },[])
    return (
        <div>
           <div className="gym-container">
           
           </div>
           <div className="gym-calculate"></div>
            
        </div>
    );
};

export default Gyms;