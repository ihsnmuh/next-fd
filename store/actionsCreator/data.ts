import axios from 'axios';
import { Dispatch } from 'react';
import { Action, ActionType } from 'store/actionTypes';

export const getAllData = () => async (dispatch: Dispatch<Action>) => {
  try {
    const { data } = await axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp');

    dispatch({
      type: ActionType.GET_ALL_DATA,
      payload: data,
    });
  } catch (err: any) {
    const { data } = err.response;
    console.log(data);
  }
};
