import React from "react";
import { connect } from "react-redux";
import { addFeature, ADD_FEATURE } from "../actions/index-actions";
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => this.props.add(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  state => state,
  dispatch => ({
    add: feature => dispatch(addFeature(feature))
  })
)(AdditionalFeature);
