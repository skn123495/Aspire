import {USER_DATA} from '../../Constants/ActionsType';

const initialState = {
  UserDetails: {
    isLoading: false,
    onSuccess: null,
    onFailed: null,
    Status: USER_DATA.USER_DATA_END,
  },
};

export default function UserDataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_DATA.USER_DATA_START:
      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,
          isLoading: true,
          Status: USER_DATA.USER_DATA_START,
        },
      };

    case USER_DATA.USER_DATA_SUCCESS:
      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,
          onSuccess: action.payload,
          Status: USER_DATA.USER_DATA_SUCCESS,
        },
      };

    case USER_DATA.USER_DATA_FAILED:
      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,
          onFailed: action.payload,
          Status: USER_DATA.USER_DATA_FAILED,
        },
      };

    case USER_DATA.USER_DATA_END:
      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,
          isLoading: false,
          Status: USER_DATA.USER_DATA_END,
        },
      };

    default:
      return state;
  }
}
