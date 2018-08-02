import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      persons: []
    }
    this.apiPersons()
  }

  apiPersons(){
    fetch(
      "https://randomuser.me/api/?results=50"
    )
    .then((response) => {
      return response.json();
    })
    .then ((json) => {
      const resultado = json.results
      this.setState ({
        persons: resultado
      })
      console.log(this.state.persons);
    })
  }
  
  render() {
    return (
      <div className="App">
        <ul>{
          this.state.persons.map((persona) => {
            return (
           <li>
            <h1>{persona.name.first}</h1>
            </li> )
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
