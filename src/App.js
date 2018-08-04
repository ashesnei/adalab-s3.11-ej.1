import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      genderSeach: "",
      citySearch: ""
    }
    this.selectCity = this.selectCity.bind(this);
    this.apiPersons()
  }

  apiPersons() {
    fetch(
      "https://randomuser.me/api/?results=50"
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const resultado = json.results
        this.setState({
          persons: resultado
        })
        console.log(this.state.persons);
      })
  }
  selectCity(event) {
    const city = event.currentTarget.value;
    this.setState({
      citySearch: city
    })
  }

  render() {
    return (
      <div className="App">
        <Search listPersons={this.state.persons} selectCity={this.selectCity}/>
        <ul className="listPersons">
          <li>
            <Person listPersons={this.state.persons} citylocation={this.state.citySearch}/>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
