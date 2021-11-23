import {ActionType} from '../action';

const initialState = {
  modalType: null,
  modalProps: {},
};

const appearance = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };

    case ActionType.HIDE_MODAL: {
      return {
        ...state,
        modalType: null,
        modalProps: {},
      }
    }

    default: return state;
  }
};

export {appearance};