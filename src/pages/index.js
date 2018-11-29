import React from 'react'
import Layout from '../components/layout'
import Form from '../components/form'
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    
    <p>A simple tool for guilt-free consumption. Simply enter your activiy type, duration, and body weight to find out how much beer you deserve.</p>

    <Form />

    <Menu></Menu>
  </Layout>
)

export default IndexPage
