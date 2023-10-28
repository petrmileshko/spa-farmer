import About from "../../blocks/about/about";
import Catalog from "../../blocks/catalog/catalog";
import "../main-page/style.css";

function MainPage({ items }) {
  return (
    <>
      <About />
      <Catalog items={items} />
    </>
  );
}

export default MainPage;
