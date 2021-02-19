import * as React from 'react'
import { Layout } from '@components/layout/layout'
import { SEO } from '@components/seo/seo'
import { Hero } from '@components/hero/hero'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
