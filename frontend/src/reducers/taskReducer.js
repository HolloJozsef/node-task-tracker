const {TASK_LIST_FAIL, TASK_LIST_SUCCESS, TASK_LIST_REQUEST} = require ("../constants/taskConstants")

 function taskListReducer(state = { tasks: [] }, action) {
  switch (action.type) {
    case TASK_LIST_REQUEST:
      return { loading: true, tasks: [] };
    case TASK_LIST_SUCCESS:
      console.log(action.payload);
      return { loading: false, tasks: action.payload };
    case TASK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export  {taskListReducer};
