import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { delTasks, fetchTasks, updatTask } from "../../Redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "../AddTodo";
import TodosCard from "../TodosCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  return (
    <div>
      <AddTodo />
      <div className="grid grid-cols-5 gap-2 px-4">
        <TodosCard/>
      </div>
    </div>
  );
};

export default Dashboard;
