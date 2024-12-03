import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTasks, updateStatus } from "../../Redux/todoSlice";

const TodosCard = () => {
  const todos = useSelector((state) => state.tasks.todo);
  const dispatch = useDispatch();

  console.log("Dashboard -> todos", todos);
  const delTask = (id) => {
    console.log(id);
    dispatch(delTasks(id));
  };
  
  const handleChange = (e, id) => {
    console.log("handleChange -> e,id", e.target.value, id);
    const value = e.target.value;
    dispatch(updateStatus({ id, status: value }));
  };

  return (
    <>
      {todos.map((item,index) => {
        return (
          <div
            key={index}
            to={"/addTodo"}
            className="flex justify-between w-full bg-slate-200 py-4 px-2 border-cyan-400 border-e-4 "
          >
            <div className="">
              <div className="font-medium">{item.todo}</div>
              <select
                className="rounded-full"
                value={item.status}
                onChange={(e) => handleChange(e, item.id)}
                name=""
                id=""
              >
                <option value="Backlog">Backlog</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex gap-2 h-10  items-">
              <button
                onClick={() => delTask(item.id)}
                className="bg-red-500   hover:text-white p-2 rounded-md "
              >
                Delete
              </button>
              {/* <button
                          className="bg-red-500  hover:text-white p-2 rounded-md "
                        >
                          Edit
                        </button> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodosCard;
