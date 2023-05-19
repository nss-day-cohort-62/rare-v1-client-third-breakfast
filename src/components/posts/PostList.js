import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../managers/PostManager";

export const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [selectedAuthorId, setSelectedAuhorId] = useState(null);

    const handleAuthorChange = (event) => {
        setSelectedAuhorId(event.target.value);
    }

    useEffect(() => {
        getAllPosts().then((res) => setPosts(res));
    }, []);

    const filteredPosts = selectedAuthorId
        ? posts.filter(post => post.user.full_name === selectedAuthorId)
        : posts;

    return (
        <>
            <div>
                <label htmlFor="author-select">Search by Author:</label>
                <select id="author-select" onChange={handleAuthorChange} value={selectedAuthorId || ''}>
                    <option value="">All Authors</option>
                    {
                        [...new Set(posts.map(post => post.user.full_name))].map(name =>
                            <option key={name} value={name}>{name}</option>
                        )
                    }
                </select>
            </div>

            <article className="posts">
                {
                    filteredPosts.sort((b, a) => a.publication_date.localeCompare(b.publication_date)).map(post => {
                        return (
                            <section key={`post--${post.id}`} className="post">
                                <div className="title">
                                    <Link to={`${post.id}`}>Title: {post.title}</Link>
                                </div>
                                <div className="category">Category: {post.category.label}</div>
                                <div className="publication_date">
                                    Published on: {post.publication_date}
                                </div>
                                <div className="author">Author: {post.user.full_name}</div>
                            </section>
                        );
                    })
                }
            </article>
        </>
    );
};
