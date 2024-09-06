import { configureStore } from "@reduxjs/toolkit";
import {
    carsReducer,
    addCar,
    removeCar, 
    changeSearchTerm,
} from './slices/carSlice'
import {
    formReducer,
    changeName,
    changeCost
} from './slices/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form:formReducer
    }
});

export {
    store,
    changeName,
    addCar,
    changeCost,
    removeCar,
    changeSearchTerm
};
