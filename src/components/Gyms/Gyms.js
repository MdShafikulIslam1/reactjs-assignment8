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
           <div className="gym-container w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative p-6	">
           {
            gyms.map(gym => <Gym
                            gym ={gym} 
                            key = {gym.id}
                            ></Gym>)
           }
           </div>
           <div className="gym-calculate"></div>
            
        </div>
    );
};

export default Gyms;