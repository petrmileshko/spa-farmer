import Panel from "/src/components/ui/panel/panel";
import { ProductImage, ProductContent, ProductCost } from "./style";
import Heading from "../heading/heading";
import Properties from "../properties/properties";
import Tabs from "../tabs/tabs";

function ProductCard({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description,
    },
    {
      title: "Характеристики",
      content: <Properties properties={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <Properties properties={product.structure} />,
    },
  ];

  return (
    <Panel>
      <ProductImage src={product.image} />
      <ProductContent>
        <Heading level={2} size={24}>
          {product.name}
        </Heading>
        <Tabs maxTabContent="105px" tabs={tabsList} />
        <ProductCost>
          {product.price} руб. / {product.weight} гр.
        </ProductCost>
      </ProductContent>
    </Panel>
  );
}

export default ProductCard;
