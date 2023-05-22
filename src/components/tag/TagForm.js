import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addTag, getTag, updateTag } from "../../managers/TagManager"

export const TagForm = () => {
    const navigate = useNavigate()
    const {tagId} = useParams()
    const [newTag, setNewTag] = useState({
        label: ""
    })

    useEffect(() => {
        getTag(tagId).then(data => setNewTag(data))
    }, [tagId])

    const changeTag = (evt) => {
        const copy = {...newTag}
        copy[evt.target.name] = evt.target.value
        setNewTag(copy)
    }

    return (
        <form> 
            <fieldset>
                <label htmlFor="label"> Tag: </label>
                <input type="text" name="label" required autoFocus className="form-control"
                    value = {newTag.label}
                    onChange={changeTag}/>
            </fieldset>
            {
            tagId ?
            <button onClick={(evt) => {
                evt.preventDefault()
                updateTag(newTag)
                .then(() => navigate("/tags"))
            }}>Edit Tag</button>
            :
            <button onClick={(evt) => {
                evt.preventDefault()
                addTag(newTag)
                .then(() => navigate("/tags"))
            }}> Add New Tag </button>
        }
        </form> 
    )
}