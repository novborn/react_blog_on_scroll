
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BlogView from '../views/BlogView.jsx'
import CityStateView from '../views/CityStateView.jsx'



const PageLayouts = () => {
  return (

   <>
   <div className="container">
      <Header/>
        <Router>
          <Routes>
            <Route path="/blog" element={<BlogView />} />
            <Route path="/state-city" element={<CityStateView />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
   </>

  )
}

export default PageLayouts