import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "../TodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/fontawesome-free-solid";

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className="Todo" key={index}>
      <div className="TodoContainer">
        <span>{todo.text}</span>
        <span className="icons">
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit"
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => removeTodo(todo.id)}
            className="delete"
          />
        </span>
      </div>
    </div>
  ));
};

export default Todo;
