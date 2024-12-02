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
      state.todo = state.todo.filter((item) => item.id !== action.payload.id);
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
  },
});
export const { addTask, deleteTask, updateTask, todoLoading, todoReceived } =
  todoSlice.actions;
export default todoSlice.reducer;

export const fetchTasks = () => async (dispatch) => {
  dispatch(todoLoading());
  const res = await axios.get("https://dummyjson.com/todos");
  dispatch(todoReceived(res.data.todos));
};
export const addTasks = (newTask) => async (dispatch) => {
  const res = await axios.post("https://dummyjson.com/todos/add", newTask);
  dispatch(addTask(res.data));
};
export const delTasks = (id) => async (dispatch) => {
  const res = await axios.delete(`https://dummyjson.com/todos/${id}`);
  dispatch(deleteTask(res.data));
};

