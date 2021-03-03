import React from 'react'
import '../Homepage.css'
import Button from 'react-bootstrap/Button'

const Homepage = () => {
    return (
        <div className="Homepage">
            <h1>Craft A Business Idea</h1>
            <Button block size="lg" variant="light" href="/signup">Sign Up</Button>
            <br />
            <Button block size="lg" variant="light" href="/login">Log In</Button>
        </div>
    )
}

export default Homepage
