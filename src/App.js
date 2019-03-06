import React, { Component } from 'react';
import Radium, { StyleRoot }  from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dngdfg', name: 'Chris', age: '25' },
      { id: 'hgfh', name: 'Marisa', age: '31' },
      { id: 'zerezr', name: 'Georges', age: '8' }
    ],
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHanler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // ES6 - Spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      cursor: 'pointer',
      font: 'inherit',
      padding: '8px',
      ':hover': { // Radium
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHanler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    // const classes = ['red', 'bold'].join(' '); // "red bold"
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['bold'] or classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={style} 
            onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
