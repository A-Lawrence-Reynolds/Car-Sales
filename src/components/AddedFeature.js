import React from 'react';
import {connect} from "react-redux"
import {REMOVE} from '../actions/index-actions '
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.remove(prop.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  state = ({}),
  dispatch => ({
    remove: feature => dispatch({type:REMOVE, payload: feature})
  })
)(AddedFeature);
