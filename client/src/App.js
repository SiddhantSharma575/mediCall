import './App.css';
import Login from './pages/Login';
import Register from "./pages/Register"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import SingleProduct from './pages/SingleProduct';
import Order from './pages/Order';
import AllOrders from './pages/AllOrders';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from "./redux/userSlice"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"))
    if (currentUser) {
      dispatch(setUser(currentUser))
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/orders' element={<AllOrders />} />
        <Route path='/orders/:id' element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
