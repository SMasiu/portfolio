import * as React from 'react'
import { Layout } from '@components/layout/layout'
import { SEO } from '@components/seo/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <span>hello</span>
    </Layout>
  )
}

export default IndexPage
