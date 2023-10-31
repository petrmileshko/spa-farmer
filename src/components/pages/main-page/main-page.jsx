import About from "../../blocks/about/about";
import Features from "../../blocks/features/features";
import { StyledMainPage } from "./style";

function MainPage({ items }) {
  return (
    <StyledMainPage>
      <About />
      <Features items={items} />
    </StyledMainPage>
  );
}

export default MainPage;
