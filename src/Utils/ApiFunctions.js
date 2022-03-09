import {API_URL} from '../Constants';
import {apiCall} from './ApiConfig';

export const getUserData = () => {
  return apiCall(API_URL.GET_USER, null, null);
};
