export const ActionType = {
  SHOW_MODAL: `appearance/showModal`,
  HIDE_MODAL: `appearance/hideModal`,
  SET_BID_SHOW: `appearance/setBidSHow`,
  SET_MOBILE_MENU_OPEN: `appearance/setMobileMenuOpen`,

  SET_USER: `user/setUser`,

  SET_PRICE: `creditCalc/setPrice`,
  SET_FIRST_PAY: `creditCalc/setFirstPay`,
  SET_TIME: `creditCalc/setTime`,
  SET_PURPOSE: `creditCalc/setPurpose`,
  SET_CREDIT: `creditCalc/setCredit`,
  SET_RATE: `creditCalc/setRate`,
  SET_MONTH_PAY: `creditCalc/setMonthPay`,
  SET_INCOME: `creditCalc/setIncome`,

  ADD_BID: `bid/addBid`,
  SET_BID_NUMBER: `bid/setBidNumber`,
};

export const ActionCreator = {
  showModal: (payload) => ({
    type: ActionType.SHOW_MODAL,
    payload,
  }),

  hideModal: () => ({
    type: ActionType.HIDE_MODAL,
  }),

  setBidSHow: (payload) => ({
    type: ActionType.SET_BID_SHOW,
    payload,
  }),

  setMobileMenuOpen: (payload) => ({
    type: ActionType.SET_MOBILE_MENU_OPEN,
    payload,
  }),

  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),

  setPurpose: (payload) => ({
    type: ActionType.SET_PURPOSE,
    payload,
  }),

  setPrice: (payload) => ({
    type: ActionType.SET_PRICE,
    payload,
  }),

  setFirstPay: (payload) => ({
    type: ActionType.SET_FIRST_PAY,
    payload,
  }),

  setTime: (payload) => ({
    type: ActionType.SET_TIME,
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

  setMonthPay: (payload) => ({
    type: ActionType.SET_MONTH_PAY,
    payload,
  }),

  setIncome: (payload) => ({
    type: ActionType.SET_INCOME,
    payload,
  }),

  addBid: (payload) => ({
    type: ActionType.ADD_BID,
    payload,
  }),

  setBidNumber: (payload) => ({
    type: ActionType.SET_BID_NUMBER,
    payload,
  }),
};
