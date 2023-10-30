import Heading from "../../ui/heading/heading";
import Button from "../../ui/button/button";

import {
  SectionCatalog,
  CatalogList,
  CatalogItem,
  CatalogItemHeader,
  CatalogItemBody,
  CatalogItemProperties,
  CatalogItemType
} from "./style";

function Catalog({ items }) {
  return items && items.length ? (
    <SectionCatalog>
      <Heading level="2">Почему фермерские продукты лучше?</Heading>
      <CatalogList>
        {items.map((item) => (
          <CatalogItem type={item.type} image={item.image}>
            <CatalogItemHeader as="p">
              <CatalogItemType type={item.type}>{item.text}</CatalogItemType>
              <CatalogItemProperties>{item.properties}</CatalogItemProperties>
            </CatalogItemHeader>
            <CatalogItemBody dangerouslySetInnerHTML={{ __html: item.body }} />
          </CatalogItem>
        ))}
      </CatalogList>
      <Button link="/buy">Купить</Button>
    </SectionCatalog>
  ) : null;
}

export default Catalog;
