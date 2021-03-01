import React from 'react';

const WorldNeedForm = ({ worldNeedContent, updateWorldNeedForm, addWorldNeedsToWorksheet, userId }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedWorldNeeds = {
            worldNeedContent: {
                ...worldNeedContent,
                [name]: value
            }
        };
        updateWorldNeedForm(updatedWorldNeeds);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addWorldNeedsToWorksheet(worldNeedContent, userId);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>World Need</h3>
                <input
                    type="text"
                    name="firstWorldNeed"
                    value={worldNeedContent.firstWorldNeed}
                    onChange={handleChange}

                /><br />
                <input
                    type="text"
                    name="secondWorldNeed"
                    value={worldNeedContent.secondWorldNeed}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="thirdWorldNeed"
                    value={worldNeedContent.thirdWorldNeed}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="fourthWorldNeed"
                    value={worldNeedContent.fourthWorldNeed}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="fifthWorldNeed"
                    value={worldNeedContent.fifthWorldNeed}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="sixthWorldNeed"
                    value={worldNeedContent.sixthWorldNeed}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="seventhWorldNeed"
                    value={worldNeedContent.seventhWorldNeed}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="eightWorldNeed"
                    value={worldNeedContent.eightWorldNeed}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="ninethWorldNeed"
                    value={worldNeedContent.ninethWorldNeed}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="tenthWorldNeed"
                    value={worldNeedContent.tenthWorldNeed}
                    onChange={handleChange}
                /><br />
                <button type="submit">WorldNeed</button>
            </form>
        </div >

    )
}

export default WorldNeedForm;