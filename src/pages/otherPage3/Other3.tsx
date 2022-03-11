const OtherPage3 = () => {
  const handleBtn = () => {
    alert("You are clicked !");
  };
  return (
    <>
      <div className="container" style={{ paddingTop: "100px" }}>
        <h1>This is Other page 3</h1>
        <button onClick={handleBtn}>Click Me</button>
      </div>
    </>
  );
};

export default OtherPage3;
