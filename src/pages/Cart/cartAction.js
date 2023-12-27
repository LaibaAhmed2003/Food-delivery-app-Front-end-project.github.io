export const addToCart = (productid) => ({
  type: "ADD_TO_CART",
  payload: productid,
});
export const removeFromCart = (itemid) => ({
  type: "REMOVE_FROM_CART",
  payload: itemid,
});

export const incrementQuantity = (itemId) => ({
  type: "INCREMENTED_QUANTITY",
  payload: itemId,
});
