import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './Pages/Home';
import Products from './components/Products'; // Ensure this is the correct import
import PageNotFound from './Pages/PageNotFound';
import PaginationProvider from './context/PaginationContext'
import Cart from './Pages/Cart';
import User from './Pages/User';

function App() {
  return (
    <PaginationProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </PaginationProvider>
  );
}

export default App;