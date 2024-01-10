import styled from "styled-components";
import { Section, Label } from "/src/components/styled";
import TextInput from "/src/components/ui/text-input/textinput";

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
