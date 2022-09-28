import React from 'react';

const Gym = ({gym}) => {
    const {time,name,picture,age} = gym;
    
    return (
        <div>
        <div className="card w-4/5 h-96 bg-base-100 shadow-xl">
        <figure>
            <img className="w-full h-40" src={picture} alt="Shoes" />
        </figure>
        <div className="p-3">
                <h2 className="text-2xl text-center font-bold mb-3">{name}</h2>
                <p className="text-lg font-semibold leading-loose">For age:{age} years</p>
                <p className="text-lg font-semibold leading-loose">Time required:{time} seconds</p>
            <div className="card-actions">
                <button className="btn btn-primary w-full absolute bottom-0 left-0">Buy Now</button>
            </div>
        </div>
      </div>
        </div>
    );
};

export default Gym;