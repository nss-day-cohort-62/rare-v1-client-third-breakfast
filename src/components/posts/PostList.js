import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../managers/PostManager"

export const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((res) => setPosts(res))
    }, [])

    return <>
    <article className="posts">
        {
            posts.sort((b, a) => a.publication_date.localeCompare(b.publication_date)).map(post => {
                return <section key={`post--${post.id}`} className="post">
                    <div className="title">
                        <Link to={`posts/${post.id}`}>Title: {post.title}</Link>
                    </div>
                    <div className="category">Category: {post.category}</div>
                    <div className="publication_date">Published on: {post.publication_date}</div>
                    <div className="author">Author: {post.user.full_name}</div>
                </section>
            })
        }

    </article>
    </>
}
