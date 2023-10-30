import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";

function PageWrapper({ items }) {
  return (
    <>
      <Header />
      <MainPage items={items} />
      <Footer />
    </>
  );
}

export default PageWrapper;
