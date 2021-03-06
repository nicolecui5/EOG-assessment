import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import getDronelocation from "../api/getDroneLocation"
import API from "../api";
import * as actions from "../actions";

// function* startLoading(){
//     const 
// }


function* getDroneLocation() {
    // yield put ({ type: actions.})
    const { error, mdata } = yield call(API.getDroneLocation);
    if(error){
        yield put({ type: actions.API_ERROR, code: error.code });
        yield cancel();
        return;
    }
    const latitude = mdata[0].latitude;
    const longitude = mdata[0].longitude;
    
    yield put({ type: actions.FETCH_WEATHER, latitude:latitude, longitude: longitude });
}

function* watch(){
    yield all(
        takeEvery(actions.FETCH_LOCATION, getDroneLocation)

    );
}

export default [watch];