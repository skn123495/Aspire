import {SELECTED_SPENDING_LIMIT, USER_DATA} from '../../Constants/ActionsType';

export const selectedSpendingLimit = payload => ({
  type: SELECTED_SPENDING_LIMIT,
  payload,
});

export const getUserData = () => ({
  type: USER_DATA.FETCH_USER_DATA,
});
