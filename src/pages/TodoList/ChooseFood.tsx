import { useState } from "react";

const ChooseFood = (props: any) => {
  const [food, setFood] = useState("");
  function abc() {
    setFood(props.list[Math.floor(Math.random() * props.list.length)].text);
  }
  return (
    <>
      <div>
        <h1>
          Hôm nay ăn :{" "}
          {props.list[Math.floor(Math.random() * props.list.length)].text}
        </h1>
        <h3>{food}</h3>
        <button onClick={abc}>Choose</button>
      </div>
    </>
  );
};
export default ChooseFood;
