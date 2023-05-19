import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addCategory } from "../../managers/CategoryManager"

export const CategoryForm = () => {
    const [category, setCategory] = useState({
        label: ""
    })

    const navigate = useNavigate()

    const submitCategory = (evt) => {
        evt.preventDefault()

        addCategory(category)
            .then(() => navigate("/categories"))
    }

    return (
        <form className="categoryForm">
            <h2 className="categoryForm__title">New Category</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Label:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...category}
                                copy.label = evt.target.value
                                setCategory(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="label"
                        className="form-control"
                        placeholder="Please enter a new category here"
                    />
                </div>
            </fieldset>
            <button onClick={submitCategory} className="btn btn-primary">
                Submit New Category
            </button>
        </form>
    )
}