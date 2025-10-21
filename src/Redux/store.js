import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import signUpReducer from './Reducers/regSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: signUpReducer,
  },
});

export default store;
