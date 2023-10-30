import About from "../../blocks/about/about";
import Catalog from "../../blocks/catalog/catalog";
import { StyledMainPage } from "./style";

function MainPage({ items }) {
  return (
    <StyledMainPage>
      <About />
      <Catalog items={items} />
    </StyledMainPage>
  );
}

export default MainPage;
