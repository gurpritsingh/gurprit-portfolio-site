import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Intro from '../components/intro'

const IndexPage = () => (
  <Layout>
    <Intro />
    {/* <h1>Hello, I'm Gurprit!</h1> */}
    {/* <p>Welcome to my portfolio site.</p> */}
    <p>Watch out for this space,for updates</p>
    <div style={{  marginBottom: '1.45rem' }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
