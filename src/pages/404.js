import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      The requested page doesn&#39;t exist... the sadness. Check you spelling or
      head back to the <Link to="/">homepage</Link>.{' '}
    </p>
  </Layout>
)

export default NotFoundPage
