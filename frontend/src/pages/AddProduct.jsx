import { useState } from 'react';
import axios from 'axios';

function AddProduct() {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = async () => {

    await axios.post(
      'https://globalstack.onrender.com/api/products',
      {
        name,
        price,
        image
      }
    );

    alert('Product Added');
  };

  return (
    <div className='form'>

      <h1>Add Product</h1>

      <input
        type='text'
        placeholder='Product Name'
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type='number'
        placeholder='Price'
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type='text'
        placeholder='Image URL'
        onChange={(e) => setImage(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Product
      </button>

    </div>
  );
}

export default AddProduct;