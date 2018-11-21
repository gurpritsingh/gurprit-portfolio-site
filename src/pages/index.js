import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Intro from '../components/intro'

const IndexPage = () => (
  <Layout>
    <Intro />
    <p style={{paddingLeft: '2rem'}}>Watch out this space, for updates</p>
    <div>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
