import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        <Form onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                name="firstWorldNeed"
                value={worldNeedContent.firstWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"

            />
            <Form.Control
                type="text"
                name="secondWorldNeed"
                value={worldNeedContent.secondWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            />
            <Form.Control
                type="text"
                name="thirdWorldNeed"
                value={worldNeedContent.thirdWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            />
            <Form.Control
                type="text"
                name="fourthWorldNeed"
                value={worldNeedContent.fourthWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            />
            <Form.Control
                type="text"
                name="fifthWorldNeed"
                value={worldNeedContent.fifthWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            />
            <Form.Control
                type="text"
                name="sixthWorldNeed"
                value={worldNeedContent.sixthWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            />
            <Form.Control
                type="text"
                name="seventhWorldNeed"
                value={worldNeedContent.seventhWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            />
            <Form.Control
                type="text"
                name="eightWorldNeed"
                value={worldNeedContent.eightWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            />
            <Form.Control
                type="text"
                name="ninethWorldNeed"
                value={worldNeedContent.ninethWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            />
            <Form.Control
                type="text"
                name="tenthWorldNeed"
                value={worldNeedContent.tenthWorldNeed}
                onChange={handleChange}
                placeholder="What does the world need?"
            /> <br />
            <Form.Group>
                <Button size="lg" variant="danger" type="submit">Save</Button>
            </Form.Group>
        </Form>

    )
}

export default WorldNeedForm;