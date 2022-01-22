import { AnyAction } from 'redux';
import { ActionType } from 'store/actionTypes';

const initialState = {
  data_fetch: {},
};

export const dataReducer = (state: any = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.GET_ALL_DATA:
      return { ...state, data_fetch: action.payload };
    default:
      return state;
  }
};
