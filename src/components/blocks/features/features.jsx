import Heading from "../../ui/heading/heading";
import Button from "../../ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";
import { useState } from "react";
import PopUp from "../../ui/popup/popup";
import { SectionFeatures, FeatureList, Feature } from "./style";

function Features({ items }) {
  const [isShow, setIsShow] = useState(false);

  const handlerButton = (evt) => {
    console.log("Нажата кнопка в блоке про еду");
    setIsShow(!isShow);
  };

  return items && items.length ? (
    <SectionFeatures>
      <Heading level="2">Почему фермерские продукты лучше?</Heading>
      <FeatureList>
        {items.map((item) => (
          <Feature type={item.type} $image={item.image} key={item.index}>
            <FeatureCard item={item} />
          </Feature>
        ))}
      </FeatureList>
      <PopUp modalShow={isShow} onClose={() => setIsShow(false)} />
      <Button onClick={handlerButton} link="/buy">
        Купить
      </Button>
    </SectionFeatures>
  ) : null;
}

export default Features;
