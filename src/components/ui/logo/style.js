import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  margin-left: -4px;
  height: 44px;
  align-items: center;
  color: #333333;
`;

export const LogoLink = styled(Link)`
  ${logoStyle}

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: #333333;
  }
`;

export const LogoMain = styled.span`
  ${logoStyle}
`;

export const LogoText = styled.span`
  margin-left: 24px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  color: #333;
`;
