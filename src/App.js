import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chris', age: '25' },
      { name: 'Marisa', age: '31' },
      { name: 'Georges', age: '8' }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON4T DO THIS: this.state.persons[0].name = 'Christof';
    this.setState({
      persons: [
        { name: newName, age: '25' },
        { name: 'Marisa V.C.', age: '31' },
        { name: 'Georges B.', age: '8' }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Christof V.C.', age: '25' },
        { name: event.target.value, age: '31' },
        { name: 'Georges B.', age: '8' }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      cursor: 'pointer',
      font: 'inherit',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style} 
          onClick={() => this.switchNameHandler('Christof V.C.')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Christof')} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My Hobbies: Marketing</Person>
      </div>
    );
  }
}

export default App;
