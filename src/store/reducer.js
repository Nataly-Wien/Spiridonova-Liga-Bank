import {combineReducers} from 'redux';
import {appearance} from './appearance/appearance';
import {creditCalc} from './credit-calc/credit-calc';
import {bid} from './bid/bid';
import {user} from './user/user';

export const NameSpace = {
  APPEARANCE: `APPEARANCE`,
  CREDIT_CALC: `CREDIT_CALC`,
  USER: `USER`,
  BID: `BID`,
};

export default combineReducers({
  [NameSpace.CREDIT_CALC]: creditCalc,
  [NameSpace.BID]: bid,
  [NameSpace.APPEARANCE]: appearance,
  [NameSpace.USER]: user,
});
