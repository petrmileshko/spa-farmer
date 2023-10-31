import styled from "styled-components";

export const FeatureHeader = styled.header`
  display: flex;
  margin: 0;
  flex-direction: column;
  padding-left: 72px;
`;

export const FeatureBody = styled.p`
  margin: 20px 0 0 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  color: #333;
`;

export const FeatureProperties = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  color: #333;
`;

export const FeatureType = styled.span`
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