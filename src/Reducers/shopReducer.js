let initialState = require("./products.json");

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INVENTORY":
      return changeInventory(state, action.id, action.item, "+");
    case "REMOVE_INVENTORY":
      return changeInventory(state, action.id, action.item, "-");
    case "RETURN_ITEMS":
      return changeInventory(state, action.id, action.item, "all", action.qtt);
    default:
      return state;
  }
};

function changeInventory(state, id, product, operation, payload) {
  let item = state.filter((el) => el.id === id);
  let restState = state.filter((el) => el.id !== id);
  let newInv =
    operation === "+"
      ? (item[0].inventory += 1)
      : operation === "-"
      ? (product.inventory -= 1)
      : (item[0].inventory += payload);
  return [...restState, { ...product, inventory: newInv }];
}

export default shopReducer;
