import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listTasks} from "../actions/taskAction";

function taskScreen(props){
  const taskList = useSelector(state =>state.taskList);
  const {tasks,loading, error}=taskList;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(listTasks());
    return ()=>{
      //
    };
  },[])
  return loading? <div>Loading...</div>:
    error? <div>{error}</div>:
      <ul>
    {
      tasks.map(task=> <li key={task._id}>
      <div>{task.name}</div>
        <div>{task.userName}</div>
        <div>{task.time}</div>
        <div>{task.finished}</div>
      </li>)
    }
  </ul>
}
export default taskScreen;
