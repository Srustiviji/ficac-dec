import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import HistoryBanner from './HistoryBanner'
import HistoryContent from './HistoryContent'
import HistoryList from './HistoryList'


const index = () => {
  return (
    <>
    
    <Header />
    <HistoryBanner />
    <HistoryContent />
    <HistoryList />
    <Footer/>
    
    </>
  )
}

export default index
