const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          } else {
            return item;
          }
        });

        const newState = {
          ...state,
          cart: updatedCart,
        };

        localStorage.setItem("cart", JSON.stringify(newState.cart));

        return newState;
      } else {
        const newState = {
          ...state,
          cart: [...state.cart, action.payload],
        };

        localStorage.setItem("cart", JSON.stringify(newState.cart));

        return newState;
      }
    case "REMOVE_FROM_CART":
      const newStateRemove = {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

      localStorage.setItem("cart", JSON.stringify(newStateRemove.cart));

      return newStateRemove;

    case "INCREMENT_QUANTITY":
      const newStateIncrement = {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      localStorage.setItem("cart", JSON.stringify(newStateIncrement.cart));
      return newStateIncrement;

    case "DECREMENT_QUANTITY":
      const newStateDecrement = {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
      localStorage.setItem("cart", JSON.stringify(newStateDecrement.cart));
      return newStateDecrement;

    default:
      return state;
  }
};

export default cartReducer;
