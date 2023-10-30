import styled from "styled-components";

export const SectionCatalog = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 90px;
`;

export const CatalogList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin: 84px 0 64px 0;
  padding: 0;
  list-style-type: none;
`;

export const CatalogItemHeader = styled.header`
  display: flex;
  margin: 0;
  flex-direction: column;
  padding-left: 72px;
`;

export const CatalogItemBody = styled.p`
  margin: 20px 0 0 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  color: #333;
`;

export const CatalogItemProperties = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  color: #333;
`;

export const CatalogItemType = styled.span`
  width: fit-content;
  display: flex;
  padding: 2px 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #fff;
  background-color: ${(props) =>
    props.type === "farmer" ? "#88aa4d" : "#f75531"};
`;

export const CatalogItem = styled.li`
  position: relative;
  display: flex;
  max-width: 540px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) =>
    props.type === "farmer" ? "#e1edce" : "#f8ddd7"};

  &::before {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 56px;
    height: 56px;
    background-repeat: no-repeat;
    background-position: center;
    content: "";
    background-image: url(${(props) => props.image});
  }
`;
