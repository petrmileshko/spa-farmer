import Panel from "/src/components/ui/panel/panel";
import { ProductImage } from "./style";

function ProductCard({ product }) {
  return (
    <Panel>
      <ProductImage src={product.image} />
    </Panel>
  );
}

export default ProductCard;
