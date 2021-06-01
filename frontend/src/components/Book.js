import React from "react";
import axios from 'axios';

export default class Book extends React.Component{
  state={tasks:[]};
  componentDidMount(){
    axios.get('http://localhost:8080/api/task')
      .then(res=>{
        const tasks = res.data;
        this.setState({tasks})
      })
  }
  render(){
    return(
      <ul>
        {this.state.tasks.map(task => <li>{task.name}</li>)}
      </ul>
    )
  }
}
