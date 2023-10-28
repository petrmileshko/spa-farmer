import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "../app/style.css";
import catalogItems from "../../mocs/catalog-items";

export default function App() {
  return <PageWrapper items={catalogItems} />;
}
