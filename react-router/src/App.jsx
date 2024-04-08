import {Route, Routes, useNavigate} from "react-router-dom"
import { useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import PostPage from './PostPage'
import NewPost from './NewPost'
import Missing from './Missing'
import Footer from './Footer'

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first post",
      dateTime: "April 04, 2024 11:01 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat deleniti voluptatibus placeat illo tenetur enim repudiandae distinctio,nobis perferendis accusamus, facere consectetur quos cumque labore mollitia sequi ea adipisci?"
    },
    {
      id: 2,
      title: "My second post",
      dateTime: "April 04, 2024 11:01 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat deleniti voluptatibus placeat illo tenetur enim repudiandae distinctio,nobis perferendis accusamus, facere consectetur quos cumque labore mollitia sequi ea adipisci?"
    },
    {
      id: 3,
      title: "My third post",
      dateTime: "April 04, 2024 11:01 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat deleniti voluptatibus placeat illo tenetur enim repudiandae distinctio,nobis perferendis accusamus, facere consectetur quos cumque labore mollitia sequi ea adipisci?"
    },
    {
      id: 4,
      title: "My forth post",
      dateTime: "April 04, 2024 11:01 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat deleniti voluptatibus placeat illo tenetur enim repudiandae distinctio,nobis perferendis accusamus, facere consectetur quos cumque labore mollitia sequi ea adipisci?"
    },
    {
      id: 5,
      title: "My fifth post",
      dateTime: "April 04, 2024 11:01 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quaerat deleniti voluptatibus placeat illo tenetur enim repudiandae distinctio,nobis perferendis accusamus, facere consectetur quos cumque labore mollitia sequi ea adipisci?"
    },
  ])
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !==id)
    setPosts(postList)
    navigate('/')

  } 
  return (
    <div className='App'>
      <Header title= "DLT Blogs"/>
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts}/>}/>      //** forward slash(/) means or specify home page **//
        <Route path="/post" element={<NewPost/>} />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>} />   //** the outsterisk will show you that the page can not be found **/
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
