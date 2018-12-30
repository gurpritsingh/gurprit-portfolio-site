import React from 'react';

import Layout from '../components/layout'

const AboutPage = () => (
    <Layout>
        <div style={{display: 'flex', height: '100vh', fontSize: '4rem', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{maxWidth: '800px', textAlign: 'center', fontFamily: "'Reem Kufi', sans-serif"}}>
                <p style={{fontSize: '3rem'}}>Hi I'm a web developer from New Delhi, India.</p>
                <p style={{fontSize: '2.3rem'}}>I am passionate about building excellent software that improves the lives around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
            </div>
        </div>
    </Layout>
)

export default AboutPage;