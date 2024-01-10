import Panel from "/src/components/ui/panel/panel";
import Heading from "../../ui/heading/heading";
import Button from "/src/components/ui/button/button";
import ProductCard from "../../ui/product-card/product-card";
import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
} from "./style";

import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function BuyPage({ products }) {
  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Heading level={2} size={18}>
            Выберите продукты
          </Heading>
          список продуктов
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
