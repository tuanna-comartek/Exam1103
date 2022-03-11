import { useState } from "react";

interface ITask {
  name: string;
  status: boolean;
}
const TaskItem = () => {
  const [newTask, setNewTask] = useState<string>("");
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
    // const newTasksL: ITask[] = [...tasks];
    const abc = tasks[index];
    console.log(abc);
    setNewTask(abc.name);
    // setTasks(newTasksL);
  };
  return (
    <>
      {tasks.map((task: ITask, index: number) => (
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
      ))}
    </>
  );
};
export default TaskItem;
