import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../../Redux/todoSlice";

const AddTodo = () => {
  const [des, setDes] = useState();
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      todo,
      des,
      completed: false,
      userId: Math.floor(Math.random() * 100),
    };
    console.log(formData);
    dispatch(addTasks(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col py-10 items-center gap-4 rounded"
    >
      <input
        onChange={(e) => setTodo(e.target.value)}
        className="bg-slate-200 w-[30%] px-2 placeholder:px-3 py-3"
        type="text"
        value={todo}
        placeholder="add task Title"
      />
      <textarea
        onChange={(e) => setDes(e.target.value)}
        value={des}
        className="bg-slate-200 px-2 placeholder:px-3 rounded"
        placeholder="description"
        name=""
        id=""
        cols="60"
        rows="3"
      ></textarea>
      <button
        onSubmit={handleSubmit}
        className="bg-blue-400 py-3 rounded-md hover:text-white  w-[200px]"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
