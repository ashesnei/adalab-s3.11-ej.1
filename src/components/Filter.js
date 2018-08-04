import React from 'react';
import Person from './Person';

class Filter extends React.Component {
    render() {
        return (
            this.props.listPersons.filter( (person) => {
                return person.location.city.toLocaleLowerCase().includes(this.props.citylocation.toLocaleLowerCase());
            })
            .filter( (personsome) => {
                return personsome.gender !== this.props.genderfilter
            })
            .map((persona) => {
                return (
                    <Person persona={persona}/>
                )
            })
        )
    }
}

export default Filter;