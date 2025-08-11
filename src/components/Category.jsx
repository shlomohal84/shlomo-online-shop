import { useContext } from "react";
import { useParams } from "react-router";

import GlobalContext from "../helpers/context/app.context";
import ProductCard from "./ProductCard";
export default function Category() {
  const products = useContext(GlobalContext).products;
  const category = useParams().category;

  return (
    <div className="categories-container">
      <h3 className="category-header">
        {category == "pc_parts" ? "PC Parts" : `${category[0].toUpperCase()}${category.slice(1, category.length)}`}
      </h3>
      <div className="category">
        {products &&
          products.map((product, i) => product.category == category && <ProductCard product={product} key={i} />)}
      </div>
    </div>
  );
}
