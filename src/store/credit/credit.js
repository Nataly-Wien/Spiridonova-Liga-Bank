import {ActionType} from '../action';
import {CreditPurposes} from '../../const';

const initialState = {
  purpose: CreditPurposes.NONE,
  credit: 0,
  rate: 0,
  monthPay: 0,
  income: 0,
};

const credit = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PURPOSE:
      return {
        ...state,
        purpose: action.payload,
      };
    case ActionType.SET_CREDIT:
      return {
        ...state,
        credit: action.payload,
      };
    case ActionType.SET_RATE:
      return {
        ...state,
        rate: action.payload,
      };
    case ActionType.SET_MONTH_PAY:
      return {
        ...state,
        monthPay: action.payload,
      };
    case ActionType.SET_INCOME:
      return {
        ...state,
        income: action.payload,
      };

    default: return state;
  }
};

export {credit};
