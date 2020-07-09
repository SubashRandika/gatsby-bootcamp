import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I am Randika Rodrigo, a senior full stack developer live in Sri Lanka,
        Colombo
      </p>
      <p>
        Do you want work with me <Link to="/contact">reach out me</Link>.
      </p>
    </Layout>
  )
}

export default AboutPage
