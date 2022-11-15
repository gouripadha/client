import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          Title: "Watch",
          price: 99,
          Qty: 1,
          img: "",
          id: 1,
        },
        {
          Title: "Mobile Phone",
          price: 599,
          Qty: 2,
          img: "",
          id: 2,
        },
        {
          Title: "Laptop",
          price: 999,
          Qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].Qty += 1;
    this.setState({ products });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].Qty === 0) {
      return;
    }
    products[index].Qty -= 1;
    this.setState({ products });
  };
  handleDelete = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id != id);
    this.setState({ products: items });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
