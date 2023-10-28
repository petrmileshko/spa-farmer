import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import "../page-wrapper/style.css";

function PageWrapper(params) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
