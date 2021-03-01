import React from 'react';

const LoveInput = ({ loveContent, updateLoveForm, submitWorksheet, userId }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedLoves = {
            loveContent: {
                ...loveContent,
                [name]: value
            }
        };
        updateLoveForm(updatedLoves);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitWorksheet(loveContent, userId);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Love</h3>
                <input
                    type="text"
                    name="firstLove"
                    value={loveContent.firstLove}
                    onChange={handleChange}

                /><br />
                <input
                    type="text"
                    name="secondLove"
                    value={loveContent.secondLove}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="thirdLove"
                    value={loveContent.thirdLove}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="fourthLove"
                    value={loveContent.fourthLove}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="fifthLove"
                    value={loveContent.fifthLove}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="sixthLove"
                    value={loveContent.sixthLove}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="seventhLove"
                    value={loveContent.seventhLove}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="eightLove"
                    value={loveContent.eightLove}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="ninethLove"
                    value={loveContent.ninethLove}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="tenthLove"
                    value={loveContent.tenthLove}
                    onChange={handleChange}
                /><br />
                <button type="submit">Love</button>
            </form>
        </div >

    )
}

export default LoveInput;