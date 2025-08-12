import { useContext } from "react";
import GlobalContext from "../helpers/context/app.context";
import ProductCard from "./ProductCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router";
export default function Cart() {
  const { cart, subtotal } = useContext(GlobalContext);

  return (
    <>
      <h3 className="category-header">
        <span>Cart</span>
      </h3>
      {cart.products && cart.products.length > 0 && (
        <Link to="/checkout">
          <Button>Proceed to checkout</Button>
        </Link>
      )}
      <h3>Subtotal: {subtotal + "$"}</h3>
      <div className="category">
        {cart.products &&
          cart.products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
      </div>
    </>
  );
}
