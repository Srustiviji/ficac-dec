import React from 'react'
import DesktopHeader from '../Shared/Header/DesktopHeader'
import Footer from '../Shared/Footer/Footer'
import MembershipBanner from './MembershipBanner'
import MembershipContent from './MembershipContent'

const index = () => {
  return (
    <>
      <DesktopHeader />
      <MembershipBanner />
      <MembershipContent />
      <Footer />
    </>
  )
}

export default index
