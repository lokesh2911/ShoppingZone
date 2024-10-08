import { usePaginationContext } from "../context/PaginationContext"
function Categories(props) {
    const {categories, setCurrCategory}=props
    const {setPageNum}=usePaginationContext();
  return (
    <>
         {categories && categories.map((category) => (
            <button
              key={category}
              className='category-option'
              onClick={() => {setCurrCategory(category),setPageNum(1)}}
            >
              {category}
            </button>
          ))}
    </>
  )
}

export default Categories
