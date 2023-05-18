import { getTags } from "../../managers/TagManager";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"

export const TagList = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTags().then(data => setTags(data))
    }, [])

    return (
        <article className="tags">
            {
                tags.sort((a, b) => a.label.localeCompare(b.label)).map(tag => {
                    return <section key={`tag--${tag.id}`} className="tag">
                        <h4> {tag.label}</h4> 
                        <button> Delete Tag</button>
                        <button> Edit Tag</button>

                    </section>
                })
            }

        </article>
    )
}
