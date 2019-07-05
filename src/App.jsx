import React, { Component } from 'react';
import ListDisplay from './ListDisplay.jsx';
import data from './data';
import './App.css';
import Form from './Form.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: data,
      count: 0
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.delete = this.delete.bind(this)

  }
  increase() {
    let newCount;
    if (this.state.count === this.state.people.length - 1) {
      newCount = 0;
    } else {
      newCount = this.state.count + 1;
    }
    this.setState({count: newCount});
  }
  decrease = () => {
    let newCount;
    if (this.state.count === 0) {
      newCount = this.state.people.length - 1;
    } else {
      newCount = this.state.count - 1;
    }
    this.setState({count: newCount});
  }
  
  delete() {
    if (this.state.people.length > 1) {
      if (this.state.count > 0) {
        var newCount;
        this.state.people.splice(this.state.count, 1);
        newCount = this.state.count - 1;
        this.setState({count: newCount});
      }
      else {
        this.state.people.splice(this.state.count, 1);
        newCount = this.state.count;
        this.setState({count: newCount});
      }
      console.log(this.state.count);
    }
  }
    
  render() {
    return (
      <div className="App">
        <nav>
          <h4 className='home'>Home</h4>
        </nav>
        <ListDisplay className='list-display' data={this.state.people} count={this.state.count} />
        <div className='btn-row-container'>
          <div className='btn-row'>
            <div>
              <button className='list-btn' onClick={this.decrease}>&#60; Previous</button>
            </div>
            <div>
              <button className='blue-btn'>Edit</button>
              <button className='blue-btn' onClick={this.delete}>Delete</button>
              <button className='blue-btn'>New</button>
            </div>
            <div>
              <button className='list-btn' onClick={this.increase}>Next &#62;</button>
            </div>
          </div>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
