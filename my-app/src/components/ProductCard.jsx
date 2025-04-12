function ProductCard({ product }) {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title.substring(0, 30)}...</h3>
        <p>{product.category}</p>
        <div className="price">${product.price}</div>
      </div>
    );
  }
  
  export default ProductCard;
  