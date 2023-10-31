import styled from "styled-components";

export const SectionFeatures = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 90px;
`;

export const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin: 84px 0 64px 0;
  padding: 0;
  list-style-type: none;
`;

export const Feature = styled.li`
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
