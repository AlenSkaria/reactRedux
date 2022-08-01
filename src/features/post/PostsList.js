import { useSelector } from "react-redux";
import './PostsList.css'
import React from 'react'
import { selectAllPosts } from "./postsSlice";

function PostsList() {

    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map((post) =>(
        <div className="rendered__posts" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </div>
    ))


    return (
        <div className="posts__container">
            <h2>Posts</h2>
            {renderedPosts}
        </div>
  )
}

export default PostsList