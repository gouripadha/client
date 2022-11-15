import React from "react";

class CartItem extends React.Component {
  render() {
    const { price, Title, Qty } = this.props.product;
    const { onIncreaseQuantity, onDecreaseQuantity, product, onDelete } =
      this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{Title}</div>
          <div style={{ color: "gray" }}>Rs {price}</div>
          <div style={{ color: "gray" }}>Qty {Qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              onClick={() => onDelete(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 200,
    width: 200,
    borderRadius: 20,
    backgroundColor: "pink",
  },
};

export default CartItem;
