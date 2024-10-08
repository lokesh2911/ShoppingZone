import { useState, useEffect } from 'react';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { MdKeyboardArrowLeft} from "react-icons/md";
import { MdKeyboardArrowRight} from "react-icons/md";
import Categories from '../components/Categories';
import Products from '../components/Products';
import basicOps from '../utility/basicOps.js';
import { usePaginationContext } from '../context/PaginationContext.jsx';

// Comparator functions for sorting

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [sortDir, setSortDir] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCategory] = useState('All Categories');
  
 
  const {pageSize, pageNum,setPageNum}=usePaginationContext();

  // Fetch products from API
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/products`);
      const productData = await resp.json();
      setProducts(productData);
    })();
  }, []);

  // Fetch categories from API
  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://fakestoreapi.com/products/categories`);
      const categoriesData = await resp.json();
      setCategories(['All Categories', ...categoriesData]);
    })();
  }, []);

  // Filter data based on search input
  const object=basicOps(products,searchTerm,sortDir,currCategory,pageNum,pageSize);
  const filterCategoryArr=object.filterCategoryArr;
  const totalPages=object.totalPages;
  return (
    <>
      <header className="nav_wrapper">
        <div className='search-container'>
          <input
            className="search_input"
            type='text'
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value) 
            setPageNum(1);
             }}
          />
        <div className='icons'>
            <div className='icon-wrapper'>
                <FaArrowAltCircleUp className="icon" onClick={() => {setSortDir(-1),setPageNum(1)} } />
                <h4 className="label">Price High</h4>
            </div>
            <div className='icon-wrapper'>
                <FaArrowAltCircleDown className="icon" onClick={() => {setSortDir(1), setPageNum(1)}} />
                <h4 className="label">Price Low</h4>
            </div>
        </div>

        </div>
        <div className='categories_wrapper'>
         <Categories categories={categories} setCurrCategory={setCurrCategory} setPageNum={setPageNum}></Categories>
        </div>
      </header>
      <main className="product_wrapper">
        <Products productList={filterCategoryArr}></Products>
      </main>
      <div className='pagination'>
        <button 
        onClick={()=>{
            if(pageNum==1)
                return 
            setPageNum((pageNum)=>pageNum-1);    
        }}
        disabled={pageNum==1 ? true: false}
        ><MdKeyboardArrowLeft></MdKeyboardArrowLeft></button>
        <div className='pageNum'>{pageNum}</div>
        <button onClick={()=>{
            if(pageNum==totalPages)
                return
            setPageNum((pageNum)=>pageNum+1)
        }}
        disabled ={pageNum==totalPages ? true : false}
        ><MdKeyboardArrowRight></MdKeyboardArrowRight></button>
      </div>
    </>
  );
}

export default Home;
