import PageWrapper from "../layout/page-wrapper/page-wrapper";
import catalogItems from "../../mocs/catalog-items";
import products from "../../mocs/products";
import { GlobalStyles } from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollTop />
        <Routes>
          <Route
            path="*"
            element={<h1>Ошибка 404. Страница не существует.</h1>}
          />
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage items={catalogItems} />} />
            <Route
              path={AppRoute.BUYPAGE.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
