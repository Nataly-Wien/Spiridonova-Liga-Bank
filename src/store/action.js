export const ActionType = {
  SHOW_MODAL: `appearance/showModal`,
  HIDE_MODAL: `appearance/hideModal`,

  SET_USER: `user/setUser`,

  SET_PURPOSE: `credit/setPurpose`,
  SET_CREDIT: `credit/setCredit`,
  SET_RATE: `credit/setRate`,
  SET_MONTH: `credit/setMonthPay`,
  SET_INCOME: `credit/setIncome`,
};

export const ActionCreator = {
  showModal: (payload) => ({
    type: ActionType.SHOW_MODAL,
    payload,
  }),

  hideModal: () => ({
    type: ActionType.HIDE_MODAL,
  }),

  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),

  setPurpose: (payload) => ({
    type: ActionType.SET_PURPOSE,
    payload,
  }),

  setCredit: (payload) => ({
    type: ActionType.SET_CREDIT,
    payload,
  }),

  setRate: (payload) => ({
    type: ActionType.SET_RATE,
    payload,
  }),

  setMonth: (payload) => ({
    type: ActionType.SET_MONTH,
    payload,
  }),

  setIncome: (payload) => ({
    type: ActionType.SET_INCOME,
    payload,
  }),
};
