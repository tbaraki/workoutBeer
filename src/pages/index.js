import React from 'react'
import Layout from '../components/layout'
import Form from '../components/form'

const IndexPage = () => (
  <Layout>
    <p>
      A simple tool for guilt-free consumption. Simply enter your activiy type,
      duration, and body weight to find out how much beer you deserve. Stick to
      your limit or go wild. It's up to you.
    </p>

    <Form />
  </Layout>
)

export default IndexPage
