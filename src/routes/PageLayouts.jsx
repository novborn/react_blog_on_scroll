
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BlogView from '../views/BlogView.jsx'
import CityStateView from '../views/CityStateView.jsx'



const PageLayouts = () => {
  return (

   <>
    <Router>
   <div className="container">
      <Header/>
       
          <Routes>
            <Route path="/blog" element={<BlogView />} />
            <Route path="/state-city" element={<CityStateView />} />
          </Routes>
        
      <Footer/>
    </div>
    </Router>
   </>

  )
}

export default PageLayouts



