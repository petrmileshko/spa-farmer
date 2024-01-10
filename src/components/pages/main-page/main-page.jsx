import About from "../../blocks/about/about";
import Features from "../../blocks/features/features";

function MainPage({ items }) {
  return (
    <>
      <About />
      <Features items={items} />
    </>
  );
}

export default MainPage;
