import Products from "../components/Products";
import { useSelector } from "react-redux";

function Cart() {
  const productList = useSelector((store) => store.cartReducer.cartProducts); // Correct key

  return (
    <>
      <h1>Cart</h1>
      <h2>Add to Products below</h2>
      <Products productList={productList}></Products>
    </>
  );
}

export default Cart;
