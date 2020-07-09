import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>
        The best way to reach me via&nbsp;
        <a
          href="https://twitter.com/RodrigoSubash"
          target="_blank"
          rel="noreferrer"
        >
          @RodrigoSubash
        </a>{" "}
        on Twitter
      </p>
    </Layout>
  )
}

export default ContactPage
