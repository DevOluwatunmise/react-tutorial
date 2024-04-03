import {Route, Routes} from "react-router-dom"
import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import PostPage from './PostPage'
import NewPost from './NewPost'
import Missing from './Missing'
import Footer from './Footer'

const App = () => {


  return (
    <div className='App'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/post-page" element={<PostPage/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
