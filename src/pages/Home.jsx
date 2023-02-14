import Layout from "./Layout";
import { shopData } from "../ShopData";
import { ProductCard } from "../components";

const Home = () => {
  return (
    <Layout>
      <h1>Mens Clothing</h1>
      <div className="products__container">
        {shopData.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
};
export default Home;
