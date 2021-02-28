import React from 'react';

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={handleChange}
                placeholder="Your name"
            />
            <br />
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <br />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="password"
            />
            <br />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp;