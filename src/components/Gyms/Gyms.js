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
        <div className="flex">
           <div className="gym-container w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative p-6	">
           {
            gyms.map(gym => <Gym
                            gym ={gym} 
                            key = {gym.id}
                            ></Gym>)
           }
           </div>
           <div className="gym-calculate border border-sky-600 w-96">
                    <div className="flex items-center p-5 ">
                    <img className='border rounded-full w-[30%]' src={`https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-against-a-grey-background-picture-id1335941248?b=1&k=20&m=1335941248&s=170667a&w=0&h=sn_An6VRQBtK3BuHnG1w9UmhTzwTqM3xLnKcqLW-mzw=`} alt="" />
                        <div className="ml-8 text-lg font-medium">
                            <p>Md: shofikul Islam</p>
                            <p>Gaibandha,Bangladesh</p>
                        </div>
                    </div>
               <div className="flex justify-around text-base font-medium"> 
               <p>Weight:52 kg</p> 
               <p>Height:5.3 </p> 
               <p>Age:23 Years</p> 
               </div>
               <h1 className="text-3xl font-bold pl-5 mt-9">Add a Break:</h1>
               <div className="flex justify-between">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                    <button>60s</button>
               </div>

           </div>
            
        </div>
    );
};

export default Gyms;