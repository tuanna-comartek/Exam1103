import Anagram from "react-anagram-animation";

const Title = () => {
  return (
    <>
      <h1 style={{ paddingTop: 104, textAlign: "center" }}>
        <Anagram words={["Comartek Company", "Company Comartek"]} />
        <p>Technology partner trusted for businesses</p>
      </h1>
    </>
  );
};
export default Title;
