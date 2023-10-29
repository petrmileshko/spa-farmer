import "../heading/style.css";

function Heading({ level, children }) {
  const CustomHTag = `h${level}`;

  return <CustomHTag className="heading">{children}</CustomHTag>;
}

export default Heading;
