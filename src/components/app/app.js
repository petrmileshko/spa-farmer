import PageWrapper from "../layout/page-wrapper/page-wrapper";
import catalogItems from "../../mocs/catalog-items";
import products from "../../mocs/products";
import { GlobalStyles } from "./style";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <PageWrapper items={catalogItems} products={products} />
    </>
  );
}
