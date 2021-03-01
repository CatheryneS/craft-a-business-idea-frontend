import React from 'react';

const GoodAtInput = ({ goodAtContent, updateGoodAtForm, addGoodAtsToWorksheet, userId }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;
        const updatedGoodAts = {
            goodAtContent: {
                ...goodAtContent,
                [name]: value
            }
        };
        updateGoodAtForm(updatedGoodAts);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addGoodAtsToWorksheet(goodAtContent, userId);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Good At</h3>
                <input
                    type="text"
                    name="firstGoodAt"
                    value={goodAtContent.firstGoodAt}
                    onChange={handleChange}

                /><br />
                <input
                    type="text"
                    name="secondGoodAt"
                    value={goodAtContent.secondGoodAt}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="thirdGoodAt"
                    value={goodAtContent.thirdGoodAt}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="fourthGoodAt"
                    value={goodAtContent.fourthGoodAt}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="fifthGoodAt"
                    value={goodAtContent.fifthGoodAt}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="sixthGoodAt"
                    value={goodAtContent.sixthGoodAt}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="seventhGoodAt"
                    value={goodAtContent.seventhGoodAt}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="eightGoodAt"
                    value={goodAtContent.eightGoodAt}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="ninethGoodAt"
                    value={goodAtContent.ninethGoodAt}
                    onChange={handleChange}
                /><br />
                <input
                    type="text"
                    name="tenthGoodAt"
                    value={goodAtContent.tenthGoodAt}
                    onChange={handleChange}
                /><br />
                <button type="submit">GoodAt</button>
            </form>
        </div >

    )
}

export default GoodAtInput;