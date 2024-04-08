import React from 'react'

const NewPost = ({handleSubmit, postTitle, postBody, setPostTitle, setPostBody}) => {
  return (
    <main className='NewPost'>
      <h2>NewPost</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title</label>
        <input
        id='postTitle'
        type='text'
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        />
      </form>
    </main>
  )
}

export default NewPost
