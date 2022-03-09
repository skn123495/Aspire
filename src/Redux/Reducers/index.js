import {combineReducers} from 'redux';
import DebitCardReducer from './DebitCard.reducer';
import UserDataReducer from './UserData.reducer';

const Reducers = combineReducers({
  DebitCardReducer,
  UserDataReducer,
});

export default Reducers;
