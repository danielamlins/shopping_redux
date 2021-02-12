import { connect } from "react-redux";

function Cart(props) {
  let total = props.cart.reduce((acc, curr) => acc + curr.price * curr.qtt, 0);
  return (
    <div>
      <ul id="products">
        Products
        {props.cart.map((product) => {
          let img = require("./Imgs/" + product.img + ".jpg");

          return product.qtt > 0 ? (
            <li key={product.id}>
              <div
                className="game-img"
                style={{
                  width: 188,
                  height: 193,
                  backgroundImage: `url(${img.default})`,
                  backgroundSize: "cover",
                }}
              ></div>
              {product.title} | {product.price} | x{product.qtt}
              <div>
                <button
                  onClick={(e) => props.removeFromCart(product.id, product)}
                >
                  Remove One
                </button>
                <button
                  onClick={(e) =>
                    props.remove_all(product.id, product, product.qtt)
                  }
                >
                  Remove All
                </button>
              </div>
            </li>
          ) : null;
        })}
      </ul>
      <div id="total">
        <h4>Total: ${total ? total.toFixed(2) : 0} </h4>
      </div>
      <button onClick={(e) => props.checkout()}>Checkout</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    removeFromCart: (id, product) => {
      dispatch({ type: "REMOVE_CART", id: id, item: product });
      dispatch({ type: "ADD_INVENTORY", id: id, item: product });
    },
    checkout: (id) => {
      dispatch({ type: "CHECKOUT", id: id });
    },
    remove_all: (id, item, qtt) => {
      dispatch({ type: "RETURN_ITEMS", id: id, item: item, qtt: qtt });
      dispatch({ type: "REMOVE_ALL", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
