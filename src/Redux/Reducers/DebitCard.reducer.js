import {SELECTED_SPENDING_LIMIT} from '../../Constants/ActionsType';

const initialState = {
  SpendingLimitAmount: 0,
};

export default function DebitCardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECTED_SPENDING_LIMIT:
      return {
        ...state,
        SpendingLimitAmount: action.payload,
      };

    default:
      return state;
  }
}
