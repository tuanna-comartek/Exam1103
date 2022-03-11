const FormAdd = () => {
  return (
    <>
      <div className="form-form">
        <form
          className="form"
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <input
            placeholder="Enter your task ......"
            style={{
              width: "51%",
              height: 40,
              border: "none",
              borderRadius: 5,
            }}
          />
          <button
            style={{
              width: "4%",
              height: 40,
              border: "none",
              borderRadius: 5,
              backgroundColor: "red",
              marginLeft: -35,
              color: "#fff",
            }}
          >
            +
          </button>
          <select
            className="select"
            style={{
              width: "25%",
              margin: "0 30px",
              height: 40,
              border: "none",
              borderRadius: 5,
            }}
          >
            <option>All</option>
            <option>Task Done</option>
            <option>Task Not Done</option>
          </select>
        </form>
      </div>
    </>
  );
};
export default FormAdd;
