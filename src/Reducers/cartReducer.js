let initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return changeCart(state, action.id, action.item, "+");
    case "REMOVE_CART":
      return changeCart(state, action.id, action.item, "-");
    case "REMOVE_ALL":
      let item = state.filter((el) => el.id !== action.id);
      return item;
    default:
      return state;
  }
};

function changeCart(state, id, product, operation) {
  let item = state.filter((el) => el.id === id);
  let restState = state.filter((el) => el.id !== id);
  if (item.length === 0) {
    let newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      qtt: 1,
    };
    return [...restState, newItem];
  } else {
    let newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img
    };
    operation === "+"
      ? (newItem.qtt = item[0].qtt + 1)
      : (newItem.qtt = item[0].qtt - 1);

    return [...restState, newItem];
  }
}

export default cartReducer;
