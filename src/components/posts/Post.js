import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostsById } from "../../managers/PostManager"

export const Post = () => {
    const [post, setPost ] = useState({})
    const { postId } = useParams()

    const fetchPost = () => {
        getPostsById(postId)
            .then((res) => setPost(res))
    }

    useEffect(
        () => {
            fetchPost()
    },
    [postId]
    )

    return <>
    <section className="post">
        <h3 className="post_title">Title: {post.title}</h3>
        <div className="post_author">Author: {post?.user?.full_name}</div>
        <div className="post_category">Category: {post?.category?.label}</div>
        <div className="post_publication_date">Published on: {post.publication_date}</div>
        <div className="post_content">Content: {post.content}</div>
    </section>
    </>
}