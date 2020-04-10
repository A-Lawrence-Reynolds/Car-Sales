import { ADD_FEATURE, REMOVE } from '../actions/index-actions'

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};
export const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_FEATURE:
      const carFeaturesAdded = [...state.car.features, action.payload];
      return {
        ...state,
        additionalPrice: carFeaturesAdded.reduce(
          (total, feature) => total + feature.price,
          0
        ),
        car: {
          ...state.car,
          features: carFeaturesAdded
        },
        additionalFeatures: state.additionalFeatures.filter(
          c => c.id !== action.payload.id
        )
      };
    case REMOVE:
      const carFeaturesFiltered = state.car.features.filter(
        c => c.id !== action.payload.id);

      return {

        ...state,
        additionalPrice: carFeaturesFiltered.reduce(
          (total, feature) => total + feature.price,
          0
        ),
        additionalFeatures: [...state.additionalFeatures, action.payload]
      };
    default:
      return state;
  }
}