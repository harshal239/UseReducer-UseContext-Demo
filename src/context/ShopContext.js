import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./ShopReducer";
import { ADD_TO_CART, UPDATE_PRICE, REMOVE_FROM_CART } from "./CartTypes";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.products.push(product);
    updatePrice(updatedCart);
    dispatch({
      type: ADD_TO_CART,
      payload: {
        products: updatedCart
      }
    });
  };
  const removeFromCart = (product) => {
    const updatedCart = state.product.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        products: updatedCart
      }
    });
  };
  const updatePrice = (products) => {
    let total = 0;
    console.log(typeof products);
    //products.forEach((product) => (total += product.price));

    dispatch({
      type: UPDATE_PRICE,
      payload: {
        total
      }
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useShop;
