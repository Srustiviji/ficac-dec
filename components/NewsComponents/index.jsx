import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import NewsBanner from './NewsBanner'
import NewsBannerContent from './NewsBannerContent'
import NewsList from './NewsList'

const index = () => {
  return (
    <>
    <Header />
    <NewsBanner />
    <NewsBannerContent />
    <NewsList />
    <Footer />
    </>
  )
}

export default index
