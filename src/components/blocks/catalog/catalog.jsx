import Heading from "../../ui/heading/heading";
import Button from "../../ui/button/button";
import "../catalog/style.css";

function Catalog({ items }) {
  return items && items.length ? (
    <section className="catalog">
      <Heading level="2">Почему фермерские продукты лучше?</Heading>
      <ul className="catalog__list">
        {items.map((item) => (
          <li
            className={`catalog__item catalog__item--${item.index} catalog__item--${item.type}`}
          >
            <p className="catalog__item-header">
              <span
                className={`catalog__item-type catalog__item-type--${item.type}`}
              >
                {item.text}
              </span>
              <span className="catalog__item-properties">
                {item.properties}
              </span>
            </p>
            <p
              className="catalog__item-body"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </li>
        ))}
      </ul>
      <Button link="/buy">Купить</Button>
    </section>
  ) : null;
}

export default Catalog;
