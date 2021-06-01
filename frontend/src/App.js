import logo from './logo.svg';
import './App.css';
import React from "react";
import {Router, Route, Switch, BrowserRouter} from "react-router-dom";
import Book from './components/Book'
import taskScreen from "./screens/taskScreen";

function App() {
  return (
    <BrowserRouter>
    <main className="main">
        <Route path="/tasks" component={taskScreen}/>
    </main>
    </BrowserRouter>
  );
}

export default App;
