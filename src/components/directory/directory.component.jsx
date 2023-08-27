import CatagoryItem from "../category-item/category-item.component";
import "./directory.styles.scss"

const Directory = ({categories}) => {
    return(
        <div className="directory-container">
      {categories.map((category) => {
        return <CatagoryItem key={category.id} category={category} />;
      })}
    </div>
    )
}

export default Directory;