import React from 'react'
import Header from '../Header'
import Main from './Main'
import About from './about-sub/About'
import Review from './Review'
import Footer from '../Footer'

const Home = () => {
  return (
    <main>
        <Header />
        <div className='background'>
          <Main />
          <About />
          <Review />
          <Footer />
        </div>
    </main>
  )
}

export default Home