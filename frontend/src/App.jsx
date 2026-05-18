import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import AddProduct from './pages/AddProduct';

function App() {

  return (
    <BrowserRouter>

      <nav class='header-container'>

        <Link to='/' class='linkstyle'>Home</Link>

        <Link to='/cart' class='linkstyle'>Cart</Link>

        <Link to='/add-product' class='linkstyle'>Add Product</Link>

      </nav>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/add-product' element={<AddProduct />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;