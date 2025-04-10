import { createContext, useReducer } from "react";
import { Bounce, Slide, toast } from "react-toastify";
export const CartContext = createContext();
const initialState = {
  items: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const isExiting = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExiting) {
        return state;
      } else {
        const newProduct = { ...action.payload, qty: 1 };
        toast.success("Product added to cart!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        return {
          items: [...state.items, newProduct],
        };
      }
    }
    case "RemoveFromCart": {
      const newProduct = state.items.filter((item) => {
        return item.id !== action.payload;
      });
      toast.success("Product is removed from the cart!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return {
        items: newProduct,
      };
    }

    case "Increment": {
      const newProduct = state.items.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item;
      });

      return {
        items: newProduct,
      };
    }

    case "Decrement": {
      const newProduct = state.items.map((item) => {
        return item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });

      return {
        items: newProduct,
      };
    }
    case "ClearCart": {
      return {
        items: [],
      };
    }
    default: {
      return state;
    }
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};