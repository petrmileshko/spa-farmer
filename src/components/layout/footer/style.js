import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: ${(props) =>
    props.theme.pageWidth ? props.theme.pageWidth : "1280px"};
  height: 80px;
  margin: 0 auto;
  padding: 10px 90px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FooterCopy = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  color: #333;
`;
