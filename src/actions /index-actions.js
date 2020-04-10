const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = feature => ({
    type:ADD_FEATURE,
    payload: feature,
});

const REMOVE = "REMOVE";

export const remove = () => ({
    type:REMOVE
});