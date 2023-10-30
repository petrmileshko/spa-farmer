import styled from "styled-components";
import aboutImage from "/src/assets/about.svg";

export const SectionAbout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  padding: 0 90px;
  background-color: #d8ecfe;

  &::before {
    position: absolute;
    right: 90px;
    top: 50%;
    width: 446px;
    height: 447px;
    flex-shrink: 0;
    border-radius: 447px;
    background-color: #c4e2ff;
    content: "";
    transform: translateY(-50%);
  }

  &::after {
    position: absolute;
    right: 177px;
    top: 37px;
    width: 273px;
    height: 627px;
    content: "";
    background-repeat: no-repeat;
    background-image: url(${aboutImage});
  }
`;

export const AboutText = styled.p`
  max-width: 538px;
  margin: 0;
  margin-top: 24px;
  color: #333;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
`;
