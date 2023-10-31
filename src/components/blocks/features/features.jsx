import Heading from "../../ui/heading/heading";
import Button from "../../ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";

import { SectionFeatures, FeatureList, Feature } from "./style";

function Features({ items }) {
  const handlerButton = (evt) => {
    console.log("Click");
  };
  return items && items.length ? (
    <SectionFeatures>
      <Heading level="2">Почему фермерские продукты лучше?</Heading>
      <FeatureList>
        {items.map((item) => (
          <Feature type={item.type} image={item.image} key={item.index}>
            <FeatureCard item={item} />
          </Feature>
        ))}
      </FeatureList>
      <Button onClick={handlerButton} link="/buy">
        Купить
      </Button>
    </SectionFeatures>
  ) : null;
}

export default Features;
