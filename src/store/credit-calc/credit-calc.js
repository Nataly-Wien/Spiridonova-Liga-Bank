import {ActionType} from '../action';
import {emptyCredit} from '../../const';

const initialState = {
  purpose: emptyCredit.purpose,
  price: emptyCredit.price,
  firstPay: emptyCredit.firstPay,
  time: emptyCredit.time,
  credit: emptyCredit.credit,
  rate: emptyCredit.rate,
  monthPay: emptyCredit.monthPay,
  income: emptyCredit.income,
};

const creditCalc = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PURPOSE:
      return {
        ...state,
        purpose: action.payload,
      };
    case ActionType.SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case ActionType.SET_FIRST_PAY:
      return {
        ...state,
        firstPay: action.payload,
      };
    case ActionType.SET_TIME:
      return {
        ...state,
        time: action.payload,
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

export {creditCalc};
