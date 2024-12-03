import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { delTasks, fetchTasks, updatTask } from "../../Redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "../AddTodo";
import TodosCard from "../TodosCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.tasks.Loading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  return (
    <div>
      <AddTodo />
      <div className="grid sm:grid-cols-2  sm:gap-2 px-4">
        {load == "pending" ? "Loading..." : <TodosCard />}
      </div>
    </div>
  );
};

export default Dashboard;
