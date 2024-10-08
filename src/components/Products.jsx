import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { action } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Products(props) {
  const { productList } = props;
  const cartProducts = useSelector((store) => store.cartReducer.cartProducts);
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(action.addToCart(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(action.deleteFromCart(product));
  };

  return (
    <>
      {productList === null ? (
        <h2>Loading....</h2>
      ) : (
        productList.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt="product" className="image" />
            <div className="product_meta">
              <p className="product_title">{product.title}</p>
              <p className="price">${product.price}</p>
            </div>
            <div className="add_to_cart_container">
              <FaSquareMinus onClick={() => handleRemoveProduct(product)} />
              <div className="currentCount">
                <PrintCount cartProducts={cartProducts} id={product.id} />
              </div>
              <FaSquarePlus onClick={() => handleAddProduct(product)} />
            </div>
          </div>
        ))
      )}
    </>
  );
}

function PrintCount(props) {
  const { cartProducts, id } = props;
  let quantity = 0;

  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].id === id) {
      quantity = cartProducts[i].individualQuantity;
      break; // Stop searching after finding the product
    }
  }

  return <>{quantity}</>;
}

export default Products;
