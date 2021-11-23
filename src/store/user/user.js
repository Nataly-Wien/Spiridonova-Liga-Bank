import {ActionType} from '../action';
import {emptyUser} from '../../const';

const initialState = {
  user: emptyUser,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default: return state;
  }
};

export {user};
