import React from 'react';
import { addFeature } from '../actions /index-actions';
import {connect} from "react-redux"
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.add(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  state => state,
  dispatch => ({
    add:feature => dispatch(addFeature(feature))
  })
) 
(AdditionalFeature);
