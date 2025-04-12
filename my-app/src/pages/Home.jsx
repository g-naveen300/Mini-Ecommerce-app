import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product-card">
            <img src={product.image} alt={product.title} width="100" />
            <h4>{product.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
