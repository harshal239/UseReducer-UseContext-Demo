import { useEffect, useState } from "react";
import useShop from "../context/ShopContext";

const ProductCard = ({ name, price, imageUrl }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = (e) => {
    e.preventDefault();
    const product = { name, imageUrl, price };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="product__container">
      <img src={imageUrl} className="product__image" alt="product" />
      <div className="product__details">
        <p className="product__heading">{name}</p>
        <p className="proudct__price">$ {price}</p>
      </div>
      <button onClick={handleClick} className="product__btn">
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
