import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      genderExclude: '',
      citySearch: '',
      nameSearch: ''
    }
    this.selectCity = this.selectCity.bind(this);
    this.apiPersons()

  }

  apiPersons() {
    fetch(
      "https://randomuser.me/api/?results=30"
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const resultado = json.results
        this.setState({
          persons: resultado
        })
      })
  }
  selectCity(event) {
    if (event.currentTarget.getAttribute('id') === 'city') {
      const city = event.currentTarget.value;
      return (
        this.setState({
          citySearch: city
        })
      )
    }
    else {
      const gender = event.currentTarget.value;
      return (
        this.setState({
          genderExclude: gender
        })
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Search listPersons={this.state.persons} selectCity={this.selectCity} />
        <List listPersons={this.state.persons} citylocation={this.state.citySearch} genderfilter={this.state.genderExclude}/>
      </div>
    );
  }
}

export default App;
