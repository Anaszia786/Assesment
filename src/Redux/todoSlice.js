import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    status: "Backlog",
    Loading: "idle",
    todo: [],
  },

  reducers: {
    addTask(state, action) {
      console.log(action.payload);
      state.todo.push(action.payload);
    },
    updateTask(state, action) {},
    deleteTask(state, action) {
      console.log("deleteTask -> action.payload.id", action.payload.id);
      state.todo = state.todo.filter(
        (item) => item.userId !== action.payload.userId
      );
    },
    todoLoading(state, action) {
      if (state.Loading == "idle") {
        state.Loading = "pending";
      }
    },
    todoReceived(state, action) {
      if (state.Loading == "pending") {
        state.Loading = "idle";
        if (state.todo.length == 0) {
          state.todo = action.payload;
        }
      }
    },
    updStat(state, action) {
      //   state.todo.find((task)=>task.id===action.payload.id)
    },
  },
});
export const {
  addTask,
  deleteTask,
  updateTask,
  updStat,
  todoLoading,
  todoReceived,
} = todoSlice.actions;
export default todoSlice.reducer;

export const fetchTasks = () => async (dispatch) => {
  dispatch(todoLoading());
  try {
    const res = await axios.get("https://dummyjson.com/todos");
    dispatch(todoReceived(res.data.todos));
  } catch (err) {
    alert(err.message);
  }
};
export const addTasks = (newTask) => async (dispatch) => {
  try {
    const res = await axios.post("https://dummyjson.com/todos/add", newTask);
    dispatch(addTask(res.data));
  } catch (err) {
    alert(err.maessage);
  }
};
export const delTasks = (id) => async (dispatch) => {
  const res = await axios.delete(`https://dummyjson.com/todos/${id}`);
  dispatch(deleteTask(res.data));
};
export const updateStatus =
  ({ id, status }) =>
  async (dispatch) => {
    console.log("updateStatus -> id,status", id, status);
    const res = await axios.put(`https://dummyjson.com/todos/${id}`, {
      status,
    });
    console.log("updateStatus -> res", res.data);
    dispatch(updStat(res.data));
  };
