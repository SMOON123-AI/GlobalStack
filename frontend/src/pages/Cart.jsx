function Cart() {

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

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

        </div>

      ))}

      <h2>Total: ₹{total}</h2>

    </div>
  );
}

export default Cart;