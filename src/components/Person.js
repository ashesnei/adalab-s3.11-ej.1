import React from 'react';

class Person extends React.Component {
render () {
return (
    <div className="user" key={this.props.persona.login.uuid}>
    <div className="photo__container">
        <img src={this.props.persona.picture.medium} alt="profile face" />
    </div>
    <div className="person__data">
        <h1 className="person__data--name">{this.props.persona.name.first} {this.props.persona.name.last}</h1>
        <p>{this.props.persona.dob.age} years</p>
        <p>Ciudad: {this.props.persona.location.city} ({this.props.persona.location.state} - {this.props.persona.nat})</p>
    </div>
</div>
 );
}
}

export default Person;