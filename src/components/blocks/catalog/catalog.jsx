import Heading from "../../ui/heading/heading";
import Button from "../../ui/button/button";
import "../catalog/style.css";

function Catalog({ items }) {
  return (
    <section className="catalog">
      {items.length ? (
        <>
          <Heading>Почему фермерские продукты лучше?</Heading>
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
                <p className="catalog__item-body">{item.body}</p>
              </li>
            ))}
          </ul>
          <Button>Купить</Button>
        </>
      ) : null}
    </section>
  );
}

export default Catalog;
