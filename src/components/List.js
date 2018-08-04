import React from 'react';
import Filter from './Filter';

class List extends React.Component {
render () {
return (
    <ul className="listPersons">
    <li>
      <Filter listPersons={this.props.listPersons} citylocation={this.props.citylocation} genderfilter={this.props.genderfilter} />
    </li>
  </ul>
 );
}
}

export default List;