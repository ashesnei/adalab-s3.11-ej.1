import React from 'react';

class Person extends React.Component {
    render() {
        return (
            this.props.listPersons.filter( (person) => {
                return person.location.city.toLocaleLowerCase().includes(this.props.citylocation.toLocaleLowerCase());
            })
            .filter( (personsome) => {
                return (personsome.gender === this.props.genderfilter)
            })
            .map((persona) => {
                return (
                    <div className="user" key={persona.login.uuid}>
                        <div className="photo__container">
                            <img src={persona.picture.medium} alt="profile face" />
                        </div>
                        <div className="person__data">
                            <h1 className="person__data--name">{persona.name.first} {persona.name.last}</h1>
                            <p>{persona.dob.age} years</p>
                            <p>Ciudad: {persona.location.city} ({persona.location.state} - {persona.nat})</p>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Person;