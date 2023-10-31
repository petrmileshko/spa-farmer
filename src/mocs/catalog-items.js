import imageOne from "/src/assets/image1.svg";
import imageTwo from "/src/assets/image2.svg";
import imageThree from "/src/assets/image3.svg";
import imageFour from "/src/assets/image4.svg";

const catalogItems = [
  {
    index: 0,
    image: imageOne,
    type: "farmer",
    text: "Фермерские продукты",
    properties: "Еда намного вкуснее",
    body:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники"
  },
  {
    index: 1,
    image: imageTwo,
    type: "shop",
    text: "Магазинные продукты",
    properties: "Просроченные продукты",
    body:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара"
  },
  {
    index: 2,
    image: imageThree,
    type: "farmer",
    text: "Фермерские продукты",
    properties: "Натуральные продукты",
    body:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений."
  },
  {
    index: 3,
    image: imageFour,
    type: "shop",
    text: "Магазинные продукты",
    properties: "Некачественное мясо",
    body:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов"
  }
];

export default catalogItems;
