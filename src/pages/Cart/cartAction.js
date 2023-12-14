export const addToCart = (productid) => {
  return {
    type: "ADD_TO_CART",
    payload: productid,
  };
};

export const removeFromCart = (itemid) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemid,
  };
};

export const increment = (itemid) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: { itemid },
  };
};

export const incrementQuantity = (itemId) => ({
  type: "INCREMENT_QUANTITY",
  payload: itemId,
});

export const decrementQuantity = (itemId) => ({
  type: "DECREMENT_QUANTITY",
  payload: itemId,
});