import React from 'react';
import { Link } from 'react-router-dom';

const StartingPage = () => {
    return (
        <div className="start">
            <h2><Link to="/worksheets/new">Start</Link></h2>
            <h1>Instructions</h1>
            <p>Welcome, you'll be coming up with ideas for three categories. Once you have come up with ideas for each, we'll randomly pick one idea from each category, which will be used to come up with a new business idea. Feel free to also watch the futur's video on Youtube that this platform is based off of. You can always find a link to it in the nav bar.</p>

            <h3 style={{ color: 'lightblue' }}>For each category use the prompts below to help you think of ideas.</h3>
            <p>Don't worry you will access to these while filling out the forms.</p>
            <h3 style={{ color: 'pink' }}>Love</h3>
            <ul>
                <li>What are you passionate about or what feels like "play"</li>
                <li>What do in your spare time, when no one is watching?</li>
                <li>If money weren't a concern, what would you do?</li>
                <li>What would you pay to do?</li>
                <li>What do you obsess over/dream about?</li>
            </ul>
            <h3 style={{ color: 'lightgreen' }}>Good At</h3>
            <ul>
                <li>What are you paid to do?</li>
                <li>What do you excel at naturally?</li>
                <li>What did/will you study in school or been trained to do?</li>
                <li>What do others often say you do easily? (Ask a friend if you need to.)</li>
            </ul>
            <h3 style={{ color: 'lightblue' }}>World Need</h3>
            <ul>
                <li>Think big(the world)</li>
                <li>Think small(neighborhoods)</li>
                <li>What opportunity to serve others?</li>
                <li>What's trending right now?</li>
            </ul>
            <h4>You ready? Hit that start button!</h4>
            <h2><Link to="/worksheets/new">Start</Link></h2>
        </div>
    )
}

export default StartingPage;
