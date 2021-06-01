import Axios from 'axios';
import axios from 'axios';
const { TASK_LIST_REQUEST, TASK_LIST_SUCCESS, TASK_LIST_FAIL} = require("../constants/taskConstants")

const listTasks=()=>async (dispatch)=>
{
  try{
    dispatch({type:TASK_LIST_REQUEST});
    const {data}=await axios.get("http://localhost:8080/api/task");
    dispatch ({type:TASK_LIST_SUCCESS, payload:data});
  }catch(error){
    dispatch({type:TASK_LIST_FAIL, payload:error.message});
  }
}

export {listTasks};
