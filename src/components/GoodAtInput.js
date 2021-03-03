import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        <Form onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                name="firstGoodAt"
                value={goodAtContent.firstGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."

            />
            <Form.Control
                type="text"
                name="secondGoodAt"
                value={goodAtContent.secondGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            />
            <Form.Control
                type="text"
                name="thirdGoodAt"
                value={goodAtContent.thirdGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            />
            <Form.Control
                type="text"
                name="fourthGoodAt"
                value={goodAtContent.fourthGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            />
            <Form.Control
                type="text"
                name="fifthGoodAt"
                value={goodAtContent.fifthGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            />
            <Form.Control
                type="text"
                name="sixthGoodAt"
                value={goodAtContent.sixthGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            />
            <Form.Control
                type="text"
                name="seventhGoodAt"
                value={goodAtContent.seventhGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            />
            <Form.Control
                type="text"
                name="eightGoodAt"
                value={goodAtContent.eightGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            />
            <Form.Control
                type="text"
                name="ninethGoodAt"
                value={goodAtContent.ninethGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            />
            <Form.Control
                type="text"
                name="tenthGoodAt"
                value={goodAtContent.tenthGoodAt}
                onChange={handleChange}
                placeholder="What are you good at? Ask a friend if you need to."
            /> <br />
            <Form.Group>
                <Button size="lg" variant="success" type="submit">Save</Button>
            </Form.Group>
        </Form>
    )
}

export default GoodAtInput;