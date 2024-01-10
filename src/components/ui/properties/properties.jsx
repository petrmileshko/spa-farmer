import { Ul } from "/src/components/styled";
import { Ptoperty, PropertyLabel } from "./style";

function Properties({ properties }) {
  return (
    <Ul>
      {properties.map((option, index) => (
        <Ptoperty key={`tab${index * 10}`}>
          <PropertyLabel>
            {option.property}
            {": "}
          </PropertyLabel>
          {option.value}
        </Ptoperty>
      ))}
    </Ul>
  );
}

export default Properties;
