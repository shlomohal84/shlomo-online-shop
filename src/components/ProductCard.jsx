import { Link } from "react-router";
import ProductButtons from "./ProductButtons";

import GlobalContext from "../helpers/context/app.context";
import { useContext } from "react";

export default function ProductCard({ product }) {
    const { auth } = useContext(GlobalContext);
    const { id, name, price, summary, mainImg } = product;
    return (
        <div className="product" data-id="003">
            <h4>
                <Link className="product-header" to={`/product/${id}`}>
                    {name}
                </Link>
            </h4>
            <div className="product-img-wrapper">
                <img className="product-main-img" alt="product-photo" src={mainImg} />
            </div>
            <p className="summary">{summary}</p>
            <p className="price">
                Price: <span>{price}$</span>
            </p>
            <ProductButtons product={product} />
        </div>
    );
}
