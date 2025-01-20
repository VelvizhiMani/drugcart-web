const { configureStore } = require("@reduxjs/toolkit");
import employeeReducer from './slices/slice';
import studentReducer from './slices/mySlice';

export const store = configureStore({
    reducer: {
        employeeData: employeeReducer,
        studentData: studentReducer
    }
})