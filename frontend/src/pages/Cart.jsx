import { useEffect, useState } from 'react';

function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const storedCart =
      JSON.parse(localStorage.getItem('cart')) || [];

    setCart(storedCart);

  }, []);

  const removeItem = (index) => {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      'cart',
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div>

      <h1>Cart</h1>

      {cart.map((item, index) => (

        <div className='card' key={index}>

          <img src={item.image} alt='' />

          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button
            onClick={() => removeItem(index)}
          >
            Remove
          </button>

        </div>

      ))}

      <h2>Total: ₹{total}</h2>

    </div>
  );
}

export default Cart;