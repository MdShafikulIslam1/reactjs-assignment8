import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="">
                <div className="flex items-center text-5xl font-bold p-4">
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                <h1 className="text-blue-600">Eco Gym Center</h1>
                </div>

                <p className="text-3xl font-medium p-6">Choice your best categories</p>

        </div>
       

    );
};

export default Header;