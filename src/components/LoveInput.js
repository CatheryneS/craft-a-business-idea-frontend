import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoveInput = ({ loveContent, updateLoveForm, addLovesToWorksheet, userId }) => {
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
        addLovesToWorksheet(loveContent, userId);
    }

    return (
        <Form className="love-form" onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                name="firstLove"
                value={loveContent.firstLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="secondLove"
                value={loveContent.secondLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="thirdLove"
                value={loveContent.thirdLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="fourthLove"
                value={loveContent.fourthLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="fifthLove"
                value={loveContent.fifthLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="sixthLove"
                value={loveContent.sixthLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="seventhLove"
                value={loveContent.seventhLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="eightLove"
                value={loveContent.eightLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="ninethLove"
                value={loveContent.ninethLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <Form.Control
                type="text"
                name="tenthLove"
                value={loveContent.tenthLove}
                onChange={handleChange}
                placeholder="What do you love to do?"
            />
            <br />
            <Form.Group>
                <Button size="lg" variant="danger" type="submit">Save</Button>
            </Form.Group>
        </Form>

    )
}

export default LoveInput;