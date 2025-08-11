import { useContext } from "react";
import GlobalContext from "../helpers/context/app.context";

import ProductCard from "../components/ProductCard";
import { Link, useParams } from "react-router";

export default function Categories({ category }) {
    const { products } = useContext(GlobalContext);
    const id = useParams().id;
    return (
        <>
            <h3 className="category-header" id={`category-header-${category}`}>
                <Link to={`/category/${category}`}>
                    {category == "pc_parts"
                        ? "PC Parts"
                        : `${category[0].toUpperCase()}${category.slice(1, category.length)}`}
                </Link>
            </h3>
            <div className="category">
                {products.map(
                    (product, i) => product.category == category && <ProductCard key={i} product={product} />
                )}
            </div>
        </>
    );
}
