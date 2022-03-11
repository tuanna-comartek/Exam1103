import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { IoMdDoneAll } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = (props: any) => {
  const { todos, completeTodo, removeTodo, updateTodo } = props;
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value: string) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo: any, index: number) => (
    <div className="col-12 col-md-6 col-lg-4 item-todo">
      <div key={index} className="todo-row">
        <h5 className={todo.status ? "complete" : ""} key={todo.id}>
          {todo.text}
        </h5>
        <div className="icons">
          <div
            onClick={() => completeTodo(todo.id)}
            className="item-icon"
            style={{ backgroundColor: "rgb(24 111 124)", color: "#fff" }}
          >
            <span>Active</span>
            <IoMdDoneAll className="icon" />
          </div>
          <div
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="item-icon"
            style={{ backgroundColor: "rgb(24 111 124)", color: "#fff" }}
          >
            <span>Edit</span>
            <FaEdit className="icon" />
          </div>
          <div
            onClick={() => removeTodo(todo.id)}
            className="item-icon"
            style={{ backgroundColor: "rgb(24 111 124)", color: "#fff" }}
          >
            <span>Delete</span>
            <AiOutlineDelete className="icon" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Todo;
