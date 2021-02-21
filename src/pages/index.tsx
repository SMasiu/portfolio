import * as React from 'react'
import { Layout } from '@components/layout/layout'
import { SEO } from '@components/seo/seo'
import { PageSlider } from '@components/page-slider/page-slider'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <PageSlider />
    </Layout>
  )
}

export default IndexPage
