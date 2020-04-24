import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="My Personal Portfolio | Mitch Hussey" />
    <h1>Hi, I'm Mitch Hussey!</h1>
    <p>I'm a software developer in NYC</p>
    <p>It's good to meet you :D</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About Me</Link>
  </Layout>
)

export default IndexPage
