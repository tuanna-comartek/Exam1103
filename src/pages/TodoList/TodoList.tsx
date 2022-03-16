import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import ChooseFood from "./ChooseFood";
import Image from "../../asset/images/item8.png";
import { useToasts } from "react-toast-notifications";

export interface ITask {
  id: number;
  text: string;
  status: boolean;
  image: any;
}
function TodoList() {
  const [todos, setTodos] = useState<ITask[]>([
    {
      id: 3,
      text: "Thịt cho nấu rượu mận ",
      status: false,
      image: { Image },
    },
    {
      id: 4,
      text: "Dồi cho nướng than hoa",
      status: false,
      image: { Image },
    },
    {
      id: 6,
      text: "Ba chỉ chó nướng lá na",
      status: true,
      image: { Image },
    },
    {
      id: 4,
      text: "Thịt cho nấu rượu mận 1",
      status: false,
      image: { Image },
    },
    {
      id: 5,
      text: "Dồi cho nướng than hoa 2",
      status: false,
      image: { Image },
    },
    {
      id: 6,
      text: "Ba chỉ chó nướng lá na 3",
      status: true,
      image: { Image },
    },
  ]);

  const { addToast } = useToasts();
  const addTodo = (todo: ITask) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      addToast("Failed", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
    addToast("Added Success", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const updateTodo = (todoId: number, newValue: ITask) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    addToast("Update Success", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const removeTodo = (id: number) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
    addToast("Delete Success", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(updatedTodos);
    addToast("Changed Success", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  return (
    <>
      <div style={{ backgroundColor: "#1f1b3a" }}>
        <div style={{ paddingTop: 50, paddingBottom: 50 }}>
          <div className="container section-todos">
            <h1 style={{ color: "#fff", paddingBottom: 40, fontSize: "65px" }}>
              To-do List
            </h1>
            <div className="section-form">
              <TodoForm onSubmit={addTodo} />
            </div>
            <div className="row section-contents" style={{ width: "100%" }}>
              <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <ChooseFood list={todos} /> */}
    </>
  );
}

export default TodoList;
