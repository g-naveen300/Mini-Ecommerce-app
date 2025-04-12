import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('Added to cart!');
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} width="200" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
