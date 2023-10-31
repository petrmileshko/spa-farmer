import {
  FeatureHeader,
  FeatureBody,
  FeatureProperties,
  FeatureType
} from "./style";

function FeatureCard({ item }) {
  return (
    <>
      <FeatureHeader as="p">
        <FeatureType type={item.type}>{item.text}</FeatureType>
        <FeatureProperties>{item.properties}</FeatureProperties>
      </FeatureHeader>
      <FeatureBody dangerouslySetInnerHTML={{ __html: item.body }} />
    </>
  );
}

export default FeatureCard;
