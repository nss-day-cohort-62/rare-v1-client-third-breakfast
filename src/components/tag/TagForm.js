import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addTag } from "../../managers/TagManager"

export const TagForm = () => {
    const navigate = useNavigate()
    const [newTag, setNewTag] = useState({
        label: ""
    })

    const changeTag = (evt) => {
        const copy = {...newTag}
        copy[evt.target.name] = evt.target.value
        setNewTag(copy)
    }

    return (
        <form> 
            <fieldset>
                <label htmlFor="label"> Tag: </label>
                <input type="text" name="label" equired autoFocus className="form-control"
                    value = {newTag.label}
                    onChange={changeTag}/>
            </fieldset>
            <button onClick={(evt) => {
                evt.preventDefault()
                addTag(newTag)
                .then(() => navigate("/tags"))
            }}> Add New Tag </button>
        </form> 
    )
}