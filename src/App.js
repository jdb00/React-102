import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  constructor(props){
    super(props)

    this.items = [
      {
        id:1,
        text: "First Item"
      },
      {
        id:2,
        text: "Second Item"
      },
      {
        id:3,
        text: "Third Item"
      }
    ]




  }

  render(){
    return (
      <div className="wrap">
        <div className="container">
            <div className="items">
              {this.items.map(function(item){
                var checkbox = "todo-checkbox-"+item.id.toString();
                return(
                  <div className="item" key={item.id}>
                      <label className="text" htmlFor="todo-checkbox-{item.id.toString()}">{item.text}</label>
                      <input type="checkbox" name="todo-checkbox" id="todo-checkbox-1"/>
                  </div>
                )
              })}
            </div>
            

            <div className="newItem">
                <input type="text" name="new-item" id="new-item"/>
                <button className="btn">Add</button>
            </div>

        </div>
    </div>
    );
  }
  
}

export default App;
