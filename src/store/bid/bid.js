import {ActionType} from '../action';

const initialState = {
  bids: [],
  bidNumber: 0,
};

const bid = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_BID:
      return {
        ...state,
        bids: [...state.bids, action.payload],
      };
    case ActionType.SET_BID_NUMBER:
      return {
        ...state,
        bidNumber: action.payload,
      };

    default: return state;
  }
};

export {bid};
