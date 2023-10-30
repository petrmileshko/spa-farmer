import Title from "../../ui/title/title";
import { SectionAbout, AboutText } from "./style";

function About() {
  return (
    <SectionAbout>
      <Title>Магазин фермерских продуктов с доставкой</Title>
      <AboutText>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </AboutText>
    </SectionAbout>
  );
}

export default About;
