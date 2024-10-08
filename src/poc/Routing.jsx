import { Route,Routes, Navigate} from "react-router-dom"
import Products from "../components/Products"
import Home from "./Home"
import Cart from "./Cart"
import PageNotFound from "./PageNotFound"
import User from "./User"
import NavBar from "../components/NavBar"

function Routing() {
  return (
    <div>
    <NavBar></NavBar>
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/products/:id" element={<Products></Products>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/user" element={<User></User>}></Route>
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </div>
  )
  
}

export default Routing
