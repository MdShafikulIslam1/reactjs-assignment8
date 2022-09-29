import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';

const Gyms = () => {
    const [gyms,setGyms] =useState([]);
    const [count,setCount] = useState(0);
    const [time,setTime] = useState(0); //breakTime state
    
    const handleExerciseCalculate = (time) =>{
        setCount(count + time);
    }
    // console.log(needTime);
    useEffect(() =>{
        fetch(`data.json`)
        .then(res => res.json())
        .then(data =>setGyms(data))
    },[])
     const handleBreakTime = (e) =>{
      const value = e.currentTarget.value;
      setTime(value);
     }

    return (
        <div className="flex relative">
           <div className="gym-container w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative p-6	">
           {
            gyms.map(gym => <Gym
                            gym ={gym} 
                            key = {gym.id}
                            handleExerciseCalculate = {handleExerciseCalculate}
                            ></Gym>)
           }
           </div>
           <div className="gym-calculate border border-sky-600 w-96 sticky top-0">
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
               <div className="flex justify-between my-4 p-4">

                    <button onClick={handleBreakTime} value ='10' className="btn btn-info border rounded-full">10 s</button>
                    <button onClick={handleBreakTime} value= '20' className="btn btn-info border rounded-full">20 s</button>
                    <button onClick={handleBreakTime} value= '30' className="btn btn-info border rounded-full">30 s</button>
                    <button onClick={handleBreakTime} value= '40' className="btn btn-info border rounded-full">40 s</button>
                    <button onClick={handleBreakTime} value= '50' className="btn btn-info border rounded-full">50 s</button>
                    <button onClick={handleBreakTime} value= '60' className="btn btn-info border rounded-full">60 s</button>
                                       
               </div>
               <h1 className="text-3xl font-bold pl-5 mt-9">Gym Details:</h1>
               <div className="ml-8 text-2xl font-medium bg-cyan-200 p-5 m-3 border rounded-lg">
                    <p>Exercise Time: {count} sec.</p>
               </div>
               <div className="ml-8 text-2xl font-medium bg-cyan-200 p-5 m-3 border rounded-lg">
                    <p>Break Time: {time} sec.</p>
               </div>
               <div>
               <button className="btn btn-info border rounded-lg w-full text-xl p-2">Activity Completed</button>
               </div>

           </div>
            
        </div>
    );
};

export default Gyms;