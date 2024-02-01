import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Post from '../components/Post/Post'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Post />
      <Footer />
    </div>
  )
}

export default Home