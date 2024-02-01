import React from 'react';

const Home = () => {
    return (
        <div className="terminal">
            <div className="terminal-header">
                <span className="terminal-button red"></span>
                <span className="terminal-button yellow"></span>
                <span className="terminal-button green"></span>
            </div>
            <div className="terminal-body">
                <p>Welcome to my portfolio!</p>
                <p>I am a software developer with expertise in JavaScript and React.</p>
                <p>Feel free to explore my projects and get in touch with me.</p>
            </div>
            <div className="terminal-footer">
                <input type="text" className="terminal-input" placeholder="Type a command..." />
            </div>
        </div>
    );
};

export default Home;
