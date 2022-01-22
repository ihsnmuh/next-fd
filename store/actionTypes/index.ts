export enum ActionType {
  GET_ALL_DATA = 'GET_ALL_DATA',
}

interface getAllData {
  type: ActionType.GET_ALL_DATA;
  payload: any;
}

export type Action = getAllData;
