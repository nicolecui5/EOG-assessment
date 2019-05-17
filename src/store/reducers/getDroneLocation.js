import * as actions from "../actions";

const initialState = {
    loading:false,
    latitude:null,
    longitude:null,

}

const startLoading = (state, action) => {
    return { ...state, loading: true };
  };

const getDroneLocation = (state, action) => {
return { ...state, latitude: action.latitude, longitude: action.longitude };
};

const handlers = {
    [actions.FETCH_LOCATION] : startLoading,
    [actions.GET_DRONE_LOCATION] : getDroneLocation

};

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
}