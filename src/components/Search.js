import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div>
                <select name="city" id="city" onChange={this.props.selectCity}>
                    <option value=""></option>
                {this.props.listPersons.map((person) => {
                    return (
                        <option value={person.location.city}>{person.location.city}</option>
                    )
                }
                )
                }
        </select>
    </div >
 );
    }
}

export default Search;