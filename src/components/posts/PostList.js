import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPosts } from "../../managers/PostManager"

export const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((res) => setPosts(res))
    }, [])

    return <>
    <article className="posts">
        {
            posts.map(post => {
                return <section key={`post--${post.id}`} className="post">
                    <div className="category">Category: {post.category}</div>
                    <div className="title">Title: {post.title}</div>
                    <div className="publication_date">Published on: {post.publication_date}</div>
                    <div className="author">Author: {post.user}
                    
                    </div>
                </section>
            })
        }

    </article>
    </>
}