import React from 'react';
import { Link } from 'react-router-dom';

import './details.css'

// maybe this should be a component class as use willMount to load details
class Details extends React.Component {
  constructor (props) {
    super(props);
    props.onLoadDetails(props.match.params.id);
  }


  render() {
    return (
  	<div className="container">
      <div>{this.props.details.description}</div>
    </div>
  )}
};

export default Details;
