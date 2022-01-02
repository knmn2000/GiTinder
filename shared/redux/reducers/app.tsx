import {IAction} from '../types/IAction';
import {ACTION_TYPES} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  accessCode: '',
};

export default (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ACTION_TYPES.SPLASH.SPLASH_LAUNCHED:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPES.OAUTH.ACCESS_CODE_GENERATED:
      return {
        ...state,
        accessCode: action.data.accessCode,
      };
    default:
      return state;
  }
};
