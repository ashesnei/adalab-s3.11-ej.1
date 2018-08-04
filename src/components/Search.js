import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="filterSearch">
                <label htmlFor="city">Filtrar por ciudad</label>
                <select className="select Cityselect" name="city" id="city" onChange={this.props.selectCity}>
                    <option value=""></option>
                    {this.props.listPersons.map((person) => {
                        return (
                            <option value={person.location.city}>{person.location.city}</option>
                        )
                    })
                    }
                </select>
                <label htmlFor="gender">Filtrar por género</label>
                <label>
                    <input onChange={this.props.selectCity} type="radio" name="gender" value=""/> Todos
                </label>
                <label>
                    <input onChange={this.props.selectCity} type="radio" name="gender" value="female" /> Hombre
                </label>
                <label>
                    <input onChange={this.props.selectCity} type="radio" name="gender" value="male" /> Mujer
                </label>
            </div >
        );
    }
}

export default Search;