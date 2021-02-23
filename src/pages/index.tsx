import * as React from 'react'
import { Layout } from '@components/layout/layout'
import { SEO } from '@components/seo/seo'
import { PageSlider } from '@components/page-slider/page-slider'
import { SliderProvider } from '@global-state/slider-store'

const IndexPage = () => {
  return (
    <SliderProvider>
      <Layout>
        <SEO title="Home" />
        <PageSlider />
      </Layout>
    </SliderProvider>
  )
}

export default IndexPage
