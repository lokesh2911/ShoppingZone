import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";


function NavBar() {
  const quantity=useSelector((store)=>{return store.cartReducer.cartQuantity})

  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/cart">
        <div className="cart_container">
        <IoCartOutline  fontSize={"large"}/>
        <div className="cart_quantity">{quantity}</div>
      </div>
      </Link>
    </div>
  );
}

export default NavBar;
