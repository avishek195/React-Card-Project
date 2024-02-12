import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>Checkiout</h1>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div>
              <h2>{cartItem.name}</h2>
              <span>{cartItem.quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
