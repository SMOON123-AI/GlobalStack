import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5000/api/products')
    .then((res) => {

      setProducts(res.data);

    });

  }, []);

  const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Added To Cart');
  };

  return (
    <div>

      <h1>GlobalStack Store</h1>

      <div className='products'>

        {products.map((product) => (

          <div className='card' key={product._id}>

            <img src={product.image} alt='' />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;