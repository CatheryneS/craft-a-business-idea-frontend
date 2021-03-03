import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = ({ credentials, updateSignUpForm, signUpUser, history }) => {
    const handleChange = (event) => {
        const { name, value } = event.target
        const updatedCredentials = {
            ...credentials,
            [name]: value
        }
        updateSignUpForm(updatedCredentials)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signUpUser(credentials, history);
    }

    return (
        <Form className="sign-up" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={credentials.name}
                    onChange={handleChange}
                    placeholder="Your name"
                />
            </Form.Group>
            <Form.Group controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="password"
                />
            </Form.Group>
            <Form.Group>
                <Button size="lg" block variant="light" type="submit">Sign Up</Button>
            </Form.Group>
        </Form>
    )
}

export default SignUp;