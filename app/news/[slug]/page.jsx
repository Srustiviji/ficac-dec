'use client'
import React, { useState , useEffect } from 'react'
import NewsBanner from '@/components/NewsComponents/NewsBanner'
import NewsComponents from '../../../components/NewsComponents'



import Posts from './posts'
import { Container } from 'react-bootstrap'

const page = ({params}) => {

  return (
    <>
    {/* <Posts slug={params.slug} /> */}
    {/* <NewsBanner /> */}

    <Posts slug={params.slug} />
   
    </>
  )
}

export default page
