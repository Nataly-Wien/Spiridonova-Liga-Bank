import {ActionType} from '../action';

const initialState = {
  modalType: null,
  modalProps: {},
  isBidShow: false,
  isMobileMenuOpen: false,
};

const appearance = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };

    case ActionType.HIDE_MODAL:
      return {
        ...state,
        modalType: null,
        modalProps: {},
      };

    case ActionType.SET_BID_SHOW:
      return {
        ...state,
        isBidShow: action.payload,
      };

    case ActionType.SET_MOBILE_MENU_OPEN:
      return {
        ...state,
        isMobileMenuOpen: action.payload,
      };

    default: return state;
  }
};

export {appearance};
