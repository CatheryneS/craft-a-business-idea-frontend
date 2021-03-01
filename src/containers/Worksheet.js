import React from 'react';
import GoodAtForm from './GoodAtForm';
import LoveForm from './LoveForm';
import WorldNeedForm from './WorldNeedForm';


const Worksheet = () => {
    return (
        <div className="worksheet-form">
            <h1>Worksheet</h1>
            <LoveForm />
            <GoodAtForm />
            <WorldNeedForm />
        </div>
    )
}

export default Worksheet