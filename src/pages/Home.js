

import React from 'react'
import { Categories } from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import MailList from '../components/MailList'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <MailList />
      <Footer />
      {/* <div style={sliderContStyle}>
        <Sliders sliderData={sliderData}></Sliders>
      </div> */}

    </>
  )
}

export default Homepage