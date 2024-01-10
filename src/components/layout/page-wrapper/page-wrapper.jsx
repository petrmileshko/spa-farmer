import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import { Main } from "./style";
import BuyPage from "../../pages/buy-page/buy-page";

function PageWrapper({ products }) {
  return (
    <>
      <Header isBuyPage={true} />
      <Main>
        <BuyPage products={products} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
