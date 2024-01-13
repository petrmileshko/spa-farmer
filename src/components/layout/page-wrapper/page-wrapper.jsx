import Header from "../header/header";
import Footer from "../footer/footer";
import { Main } from "./style";
import { Outlet } from "react-router-dom";

function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
