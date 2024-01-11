import { useState } from "react";
import Panel from "/src/components/ui/panel/panel";
import Heading from "../../ui/heading/heading";
import Button from "/src/components/ui/button/button";
import ProductCard from "../../ui/product-card/product-card";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";

import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel,
} from "./style";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function BuyPage({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);

  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Heading level={2} size={18}>
            Выберите продукты
          </Heading>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
          />
        </Panel>
        <Panel>
          <Heading level={2} size={18}>
            Сделать заказ
          </Heading>
          <AddressInput placeholder="Введите адрес доставки" />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue>400</PriceValue>
          <Button maxWidth>Купить</Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction",
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  );
}

export default BuyPage;
