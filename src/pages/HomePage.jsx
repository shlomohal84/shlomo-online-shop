import ImgCarousel from "../components/ImgCarousel";
import Categories from "../components/Categories";
import GlobalContext from "../helpers/context/app.context";
import { useContext } from "react";

export default function HomePage() {
  const { categories, auth } = useContext(GlobalContext);

  return (
    <div className="HomePage">
      {auth.isLoggedIn && <h1 style={{ textAlign: "center" }}>{`Hello ${auth.username}!!!!`}</h1>}
      <ImgCarousel />
      <div className="categories-container">
        {categories.map((category, i) => (
          <Categories key={i} category={category} />
        ))}
      </div>
    </div>
  );
}
