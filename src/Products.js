import { connect } from "react-redux";

function Products(props) {
  return (
    <ul id="products">
      Products
      {props.shop.map((product) => {
        let img = require("./Imgs/" + product.img + ".jpg");
        return product.inventory > 0 ? (
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
            <div className="infos">
              {product.title} | {product.price} | x{product.inventory}
            </div>

            <div className="btns">
              <button onClick={(e) => props.addToCart(product.id, product)}>
                Add to cart
              </button>
            </div>
          </li>
        ) : null;
      })}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    shop: state.shop,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addToCart: (id, product) => {
      dispatch({ type: "ADD_CART", id: id, item: product });
      dispatch({ type: "REMOVE_INVENTORY", id: id, item: product });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
