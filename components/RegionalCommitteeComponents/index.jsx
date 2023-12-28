'use client'
import React from 'react'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import RegionalCommittees from './RegionalCommittees'
import RegionCommitteesBanner from '../RegionalCommitteeComponents/RegionCommitteeBanner'
import RegionCommitteesBannerContent from  '../RegionalCommitteeComponents/RegionCommitteBannerContent'


import '../StyleComponents'



const index = () => {
  return (
    <>
    <Header />
    <RegionCommitteesBanner />
    <RegionCommitteesBannerContent />
    <RegionalCommittees />
    <Footer />
    </>
  )
}

export default index
