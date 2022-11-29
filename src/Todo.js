import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      // constructor(properties){

      //   Fill in by passing in the properties from the NewTodo or just props as a whole. 

      // }

      <li className="todoItem">
        <input className="completeBox" type="checkbox"></input>
          <p>PASS SOMETHING IN</p>
          <input className="deleteButton" type="button" name="deleteButton" value="X"></input>
      </li>

          );
  }
}

          export default Todo;
