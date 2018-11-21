import React from 'react';

const Intro = () => (
    <div className="introComponent" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column' 
        }}>
        <h1 style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: '7em' }}>
             Hello, I'm Gurprit!
        </h1>
        <h2 style={{ fontWeight: 100 }}>FrontEnd Dev | Full Stack Javascript | Backend Fiddler</h2>
    </div>
)

export default Intro;