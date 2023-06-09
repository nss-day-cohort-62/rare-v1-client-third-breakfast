import { useEffect, useState } from "react"
import { getAllCategories } from "../../managers/CategoryManager"
import { useNavigate } from "react-router-dom"
// import "./Category.css"

export const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllCategories().then((res) => setCategories(res))
    }, [])

    return (
        <>
          <h2>Category List</h2>
          <div className="categories">
            {categories
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((categoryObject) => (
                <ul className="categories" key={`category--${categoryObject.id}`}>
                  {categoryObject.label}
                </ul>
              ))}
          </div>
          <button className="actions__create"
            onClick={() => navigate("/categories/create")}>Create Category</button>
        </>
      );
}