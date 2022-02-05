import { useState } from "react";
import "./index.css";
import { menu } from "./data";
import Menu from "./Menu";
import Buttons from "./Buttons";

const App = () => {
  const [menuList, setMenuList] = useState(menu);
  /*const [categories, setCategories] = useState(allCategories);*/
  const allCategories = ["All", ...new Set(menu.map((item) => item.category))];
  const filterItems = (category) => {
    if (category === "All") {
      setMenuList(menu);
    } else {
      const newList = menu.filter((item) => item.category === category);
      setMenuList(newList);
    }
  };
  return (
    <main>
      <div className="container">
        <h1>Our Menu</h1>
        <Buttons allCategories={allCategories} filterItems={filterItems} />
        <Menu menuList={menuList} />
      </div>
    </main>
  );
};

export default App;
