import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import "../page-wrapper/style.css";

function PageWrapper({ items }) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage items={items} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
