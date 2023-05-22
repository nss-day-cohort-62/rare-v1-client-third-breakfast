import { getTags, deleteTag } from "../../managers/TagManager";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import Popup from 'reactjs-popup';
import './tags.css'

export const TagList = () => {
    const [tags, setTags] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getTags().then(data => setTags(data))
    }, [])

    return (
        <div> 
            <article className="tags">
                {
                    tags.sort((a, b) => a.label.localeCompare(b.label)).map(tag => {
                        return <section key={`tag--${tag.id}`} className="tag">
                            <h4> {tag.label}</h4> 
                            <Popup trigger={<button> Delete Tag</button>} position={"right center"}> 
                                <div> Are you sure you want to delete me? Please don't delete me! <div><button onClick={() => deleteTag(tag.id)
                                    .then(() => getTags().then(data => setTags(data)))}>Delete</button></div> </div>
                            </Popup>
                            <button onClick={() => navigate({pathname: `create/${tag.id}`})}> Edit Tag</button>

                        </section>
                    })
                }
            </article>
        <button onClick={() => navigate({pathname: "create"})}> Create New Tag</button>
        </div>
    )
}
