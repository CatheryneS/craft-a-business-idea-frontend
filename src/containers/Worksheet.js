import React from 'react';
import GoodAtForm from './GoodAtForm';
import LoveForm from './LoveForm';


const Worksheet = () => {
    return (
        <div className="worksheet-form">
            <h1>Worksheet</h1>
            <LoveForm />
            <GoodAtForm />
        </div>
    )
}

export default Worksheet