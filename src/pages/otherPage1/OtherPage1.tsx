interface info {
  name: string;
  address: string;
  phoneNumber: number;
  email: string;
}

const OtherPage1 = (props: info) => {
  return (
    <>
      <div className="container" style={{ paddingTop: "100px" }}>
        <h1>Information</h1>
        <div>
          <h1>My nam is {props.name}</h1>
          <h1>I live in {props.address}</h1>
          <h1>My PhoneNumber : {props.phoneNumber}</h1>
          <h1>My Email : {props.email}</h1>
        </div>
      </div>
    </>
  );
};
export default OtherPage1;
