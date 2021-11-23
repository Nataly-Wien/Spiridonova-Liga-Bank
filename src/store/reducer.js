import {combineReducers} from 'redux';
import {appearance} from './appearance/appearance';
import {credit} from './credit/credit';
import {user} from './user/user';

export const NameSpace = {
  APPEARANCE: `APPEARANCE`,
  CREDIT: `CREDIT`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.CREDIT]: credit,
  [NameSpace.APPEARANCE]: appearance,
  [NameSpace.USER]: user,
});
