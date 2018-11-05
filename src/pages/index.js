import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Form from '../components/form'
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <Menu></Menu>

    <h1>Earn your beer.</h1>
    <p>A simple too for guilt-free consumption. Simply enter your activiy type, duration, and body weight to find out how much beer you deserve.</p>

    <Form />

  </Layout>
)

export default IndexPage
