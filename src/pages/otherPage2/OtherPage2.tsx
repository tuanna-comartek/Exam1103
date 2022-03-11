import { useEffect, useState } from "react";

const OtherPage2 = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date());
    }, 1000);
  }, []);
  return (
    <>
      <div className="container" style={{ paddingTop: "100px" }}>
        <h1>{timer.toLocaleTimeString()}</h1>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </>
  );
};
export default OtherPage2;
