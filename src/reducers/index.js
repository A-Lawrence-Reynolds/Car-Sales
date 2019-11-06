import { ADD_FEATURE, REMOVE } from "../actions/index-actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        features: [...state.features, action.payload]
      };
  }
};
