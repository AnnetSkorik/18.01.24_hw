import { useState } from 'react'
import { posts } from '../../utils/posts'
import AddNewPost from '../AddNewPost/AddNewPost'
import Post from '../Post/Post'

function PostList() {
  const [postList, setPostList] = useState(posts())

  const changedMarked = (id) => {
    const newPostList = postList.map(function (post) {
      return post.id === id ? { ...post, marked: !post.marked } : post
    })

    setPostList(newPostList)
  }

  const quotos = (post) => {
    setPostList([...postList, post])
  }

  return (
    <div>
      <h1>кнопка меняет рандомно цитату</h1>
      <button onClick>поменять цитату</button>
      {/* <AddNewPost handleAddPost={handleAddPost} />
      {postList.map((post) => (
        <Post key={post.id} {...post} changedMarked={changedMarked} />
      ))} */}
    </div>
  )
}

export default PostList

export const changedMarked = () => {
const []= Math.floor(Math.random() * 1)
}

