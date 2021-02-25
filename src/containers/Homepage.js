import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h1>Craft A Business Idea</h1>
            <Link to="/signup">SignUp</Link> | <Link to="/login">LogIn</Link>
        </div>
    )
}

export default Homepage
