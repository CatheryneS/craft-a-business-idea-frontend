import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = ({ credentials, updateLoginForm, login, history }) => {
    const handleChange = (event) => {
        const { name, value } = event.target
        const updatedCredentials = {
            ...credentials,
            [name]: value
        }
        updateLoginForm(updatedCredentials)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(credentials, history);
    }

    return (
        <Form className="login" onSubmit={handleSubmit}>
            <Form.Group controlId="LoginUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="username"
                />
            </Form.Group>
            <Form.Group controlId="LoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="password"
                />
            </Form.Group>
            <Form.Group controlId="LoginSubmit">
                <Button size="lg" block variant="light" type="submit">Login</Button>
            </Form.Group>
        </Form>
    )
}

export default Login;