import styled, { css } from "styled-components";
import { Section, Label } from "/src/components/styled";
import TextInput from "/src/components/ui/text-input/textinput";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";

const leftWidth = "353px";

export const LeftColumn = styled.div`
  width: ${leftWidth};
  padding-right: 20px;
  overflow-y: overlay;
  max-height: 100%;
`;

export const StyledOrder = styled(Section)`
  position: absolute;
  top: 80px;
  bottom: 80px;
  display: flex;
  width: inherit;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: #f7f7f7;
  max-width: ${(props) => props.theme.pageWidth};
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: 20px;
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: #f7f7f7;
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
