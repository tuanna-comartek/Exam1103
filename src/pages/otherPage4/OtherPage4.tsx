import React, { useRef, useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  status: boolean;
}

function OtherPage4() {
  const [newTask, setNewTask] = useState<string>("");
  const [isEdit, setIsEdit] = useState(true);
  const [tasks, setTasks] = useState<ITask[]>([
    {
      name: "an thit cho",
      status: true,
    },
    {
      name: "an thit ga",
      status: false,
    },
    {
      name: "an thit bo",
      status: false,
    },
    {
      name: "an thit lon",
      status: true,
    },
  ]);
  const taskInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormElement) => {
    event.preventDefault();
    if (newTask === "") {
      alert("Vui long nhap task !!");
    } else {
      addTask(newTask);
    }
    setNewTask("");
    taskInput.current?.focus();
    console.log(tasks);
  };

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, status: false }];
    setTasks(newTasks);
  };

  const toggleDoneTask = (index: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[index].status = !newTasks[index].status;
    setTasks(newTasks);
  };

  const handleDelete = (index: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const handleEdit = (index: number): void => {
    const abc = tasks[index];
    console.log(abc);
    setNewTask(abc.name);
    setIsEdit(false);
    // console.log(tasks);
    // setTasks(tasks);
  };
  // const handleTaskDone = () => {
  //   const newTasks = tasks.filter((task: ITask) => {
  //     return task.status == true;
  //   });
  //   setTasks(newTasks);
  //   console.log(tasks);
  // };
  // const handleTaskNotDone = () => {
  //   const newTasks = tasks.filter((task: ITask) => {
  //     return task.status == false;
  //   });
  //   setTasks(newTasks);
  // };
  return (
    <>
      <div className="container section-todo">
        <div className="row section-todo-content">
          <h1>To-Do List</h1>
          <div className="form-form">
            <form
              className="form"
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Enter your task ......"
                style={{
                  width: "51%",
                  height: 40,
                  border: "none",
                  borderRadius: 5,
                }}
                type="text"
                onChange={(event) => setNewTask(event.target.value)}
                value={newTask}
                autoFocus
                ref={taskInput}
              />
              <button
                // onClick={handleSubmit}
                style={{
                  width: "4%",
                  height: 30,
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
                <option value={"all"}>All</option>
                <option value={"completed"}>Task Done</option>
                <option value={"uncompleted"}>Task Not Done</option>
              </select>
            </form>
            {/* <button onClick={handleTaskDone}> done</button> */}
          </div>
          {isEdit === true ? (
            tasks.map((task: ITask, index: number) => (
              <div className="item" key={index} style={{ display: "flex" }}>
                <h4
                  style={{
                    textDecoration: task.status ? "line-through" : "none",
                  }}
                  className="content-task"
                >
                  {task.name}
                </h4>
                <div className="btn-btn">
                  <button
                    onClick={() => toggleDoneTask(index)}
                    style={{ backgroundColor: "green" }}
                  >
                    ✔
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    style={{ backgroundColor: "pink" }}
                  >
                    ✔
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{ backgroundColor: "red" }}
                  >
                    ✘
                  </button>
                </div>
              </div>
            ))
          ) : (
            <form
              className="form"
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Enter your task ......"
                style={{
                  width: "51%",
                  height: 40,
                  border: "none",
                  borderRadius: 5,
                }}
                type="text"
                onChange={(event) => setNewTask(event.target.value)}
                value={newTask}
                autoFocus
                ref={taskInput}
              />
              <button
                // onClick={handleSubmit}
                style={{
                  width: "4%",
                  height: 30,
                  border: "none",
                  borderRadius: 5,
                  backgroundColor: "red",
                  marginLeft: -35,
                  color: "#fff",
                }}
              >
                +
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default OtherPage4;
