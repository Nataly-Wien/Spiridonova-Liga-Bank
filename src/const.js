export const MAIN_MENU_ITEMS = [`Услуги`, `Рассчитать кредит`, `Конвертер валют`, `Контакты`];
export const CURRENT_PAGE = `Рассчитать кредит`;
export const USER_NAV_ITEMS = [`Войти в Интернет-банк`];

export const SLIDER_LENGTH = 3;
export const TABS_LENGTH = 4;
export const CURRENT_SLIDE = 0;
export const SLIDER_DATA = [
  {
    title: `Лига Банк`,
    slogan: `Кредиты на любой случай`,
    buttonText: `Рассчитать кредит`,
    buttonRef: `credit-calculator`,
  },
  {
    title: `Лига Банк`,
    slogan: `Ваша уверенность в${`\u00a0`}завтрашнем дне`,
    buttonText: ``,
    buttonRef: ``,
  },
  {
    title: `Лига Банк`,
    slogan: `Всегда рядом`,
    buttonText: `Найти отделение`,
    buttonRef: `find-branch`,
  },
];

export const CURRENT_TAB = 0;
export const TABS = [
  {
    name: `Вклады`,
    icon: `vault`,
  },
  {
    name: `Кредиты`,
    icon: `cards`,
  },
  {
    name: `Страхование`,
    icon: `security`,
  },
  {
    name: `Онлайн-сервисы`,
    icon: `phone`,
  },
];
export const TABS_DATA = [
  {
    title: `Вклады Лига Банка – это выгодная инвестиция в${`\u00a0`}свое будущее`,
    features: [`Проценты по вкладам до 7%`, `Разнообразные условия`, `Возможность ежемесячной капитализации или вывод процентов на банковскую карту`],
    text: ``,
    buttonText: `Узнать подробнее`,
    buttonRef: ``,
  },
  {
    title: `Лига Банк выдает кредиты под${`\u00a0`}любые цели`,
    features: [`Ипотечный кредит`, `Автокредит`, `Потребительский кредит`],
    text: `Рассчитайте ежемесячный платеж и${`\u00a0`}ставку по${`\u00a0`}кредиту воспользовавшись нашим `,
    textLink: `кредитным калькулятором`,
    buttonText: ``,
    buttonRef: `credit-calculator`,
  },
  {
    title: `Лига Страхование — застрахуем все что${`\u00a0`}захотите`,
    features: [`Автомобильное страхование`, `Страхование жизни и здоровья`, `Страхование недвижимости`],
    text: ``,
    buttonText: `Узнать подробнее`,
    buttonRef: ``,
  },
  {
    title: `Лига Банк — это огромное количество онлайн-сервисов для${`\u00a0`}вашего удобства`,
    features: [`Мобильный банк,${`\n`}который всегда под рукой`, `Приложение Лига-проездной позволит вам${`\u00a0`}оплачивать билеты по всему миру`],
    text: ``,
    buttonText: `Узнать подробнее`,
    buttonRef: ``,
  },
];

export const SliderTypes = {
  SLIDER: `SLIDER`,
  TABS: `TABS`,
};

export const getTabsIcon = (name) => {
  switch (name) {
    case `vault`:
      return (<svg width="34" height="33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.207 26.063h25.585V4.366H4.207v21.697Zm8.661-14.267a3.445 3.445 0 0 1 3.338 2.576h7.521v1.684h-7.521a3.445 3.445 0 0 1-3.338 2.577c-1.899 0-3.443-1.534-3.443-3.419s1.544-3.418 3.443-3.418Z" fill="#2C36F2" /><path d="M0 0v30.429h2.48V33h2.968v-2.571h23.104V33h2.968v-2.571H34V0H0Zm2.512 27.747V2.682h28.976v25.065H2.512Z" fill="#2C36F2" /></svg>)
    case `cards`:
      return (<svg width="34" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.702 4.397 11.88.035a1.642 1.642 0 0 0-1.94 1.25l-.396 2.517 24.026 5.033.396-2.517a1.626 1.626 0 0 0-1.263-1.92ZM23.945 9.368a1.66 1.66 0 0 0-2.034-1.139l-3.953 1.087-9.32-1.953-1.024 4.794-6.404 1.759a1.639 1.639 0 0 0-1.15 2.013l3.609 12.873a1.66 1.66 0 0 0 2.034 1.139l20.7-5.687a1.639 1.639 0 0 0 1.15-2.013l-.619-2.21 2.322.486a1.641 1.641 0 0 0 1.94-1.25l1.47-6.87-8.363-1.752-.358-1.277Zm2.39 6.543.513-2.395a.676.676 0 0 1 .798-.514l2.42.507a.669.669 0 0 1 .52.79l-.513 2.395a.676.676 0 0 1-.798.514l-2.42-.507a.67.67 0 0 1-.52-.79ZM1.572 15.2l20.7-5.686a.312.312 0 0 1 .376.21l.705 2.517L2.064 18.09l-.706-2.517a.306.306 0 0 1 .213-.372Zm24.685 7.396a.295.295 0 0 1-.03.229.296.296 0 0 1-.183.143l-20.7 5.687a.312.312 0 0 1-.376-.21l-2.105-7.51 21.289-5.847 2.105 7.508Z" fill="#565EF5" /><path d="M8.688 23.11a.677.677 0 0 0-.83-.464l-2.417.665a.668.668 0 0 0-.469.82l.671 2.393c.1.354.472.563.83.464l2.417-.664a.668.668 0 0 0 .47-.82l-.672-2.393Z" fill="#565EF5" /></svg>);
    case `security`:
      return (<svg width="28" height="34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.923 5.312C22.155 5.312 17.736 3.655 14 0 10.262 3.655 5.843 5.312.076 5.312.077 14.83-1.881 28.463 13.999 34c15.882-5.537 13.924-19.17 13.924-28.688ZM12.846 22.06l-4.639-4.666 2.077-2.089 2.562 2.577 4.87-4.897 2.076 2.089-6.946 6.986Z" fill="#565EF5" /></svg>);
    case `phone`:
      return (<svg width="20" height="34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.675 0H2.325C1.047 0 0 1.033 0 2.296v29.407C0 32.966 1.047 34 2.325 34h15.35C18.953 34 20 32.968 20 31.703V2.296C20 1.033 18.953 0 17.675 0ZM7.545 1.655h4.91a.28.28 0 0 1 .282.28.28.28 0 0 1-.282.277h-4.91a.28.28 0 0 1-.282-.278.28.28 0 0 1 .282-.279ZM10 32.852a1.155 1.155 0 0 1-1.163-1.15c0-.635.52-1.148 1.163-1.148.642 0 1.163.513 1.163 1.149 0 .635-.52 1.149-1.163 1.149Zm8.382-3.102H1.618V3.642h16.764V29.75Z" fill="#565EF5" /></svg>);
    default: return;
  }
}

export const CreditPurposes = {
  NONE: `Выберите цель кредита`,
  HYPOTHEC: `Ипотечное кредитование`,
  AUTO: `Автомобильное кредитование`,
};

export const CreditConstants = {
  PRICE_MIN: {
    [CreditPurposes.HYPOTHEC]: 1200000,
    [CreditPurposes.AUTO]: 500000,
  },
  PRICE_MAX: {
    [CreditPurposes.HYPOTHEC]: 25000000,
    [CreditPurposes.AUTO]: 5000000,
  },
  // PRICE_INITIAL: {
  //   // [CreditPurposes.NONE]: 0,
  //   [CreditPurposes.HYPOTHEC]: 5000000,
  //   [CreditPurposes.AUTO]: 1500000,
  // },
  PRICE_STEP: {
    [CreditPurposes.HYPOTHEC]: 100000,
    [CreditPurposes.AUTO]: 50000,
  },
  FIRST_PAY_MIN: {
    [CreditPurposes.HYPOTHEC]: 0.1,
    [CreditPurposes.AUTO]: 0.2,
  },
  FIRST_PAY_STEP: {
    [CreditPurposes.HYPOTHEC]: 0.05,
    [CreditPurposes.AUTO]: 0.05,
  },
  FIRST_PAY_TOTAL: {
    [CreditPurposes.HYPOTHEC]: 0,
    [CreditPurposes.AUTO]: 0,
  },
  TIME_MIN: {
    [CreditPurposes.HYPOTHEC]: 5,
    [CreditPurposes.AUTO]: 1,
  },
  TIME_MAX: {
    [CreditPurposes.HYPOTHEC]: 30,
    [CreditPurposes.AUTO]: 5,
  },
  MIN_CREDIT: {
    [CreditPurposes.HYPOTHEC]: 500000,
    [CreditPurposes.AUTO]: 200000,
  },
  RATE_LIMIT: {
    [CreditPurposes.HYPOTHEC]: 0.15,
    [CreditPurposes.AUTO]: 2000000,
  },
  MOTHER_MONEY: 470000,
  HYPOTHEC_RATES: [0.094, 0.085],
  // AUTO_RATES: [0.16, 0.15, 0.085, 0.035],
  AUTO_RATES: [0.035, 0.085, 0.15, 0.16],

  // INCOME_LIMIT: 0.45,
};



export const PopupTypes = {
  ENTER: `ENTER`,
  THANKS: `THANKS`,
}

export const MODAL_POPUPS = {
  enter: {
    link: `.login-form`,
  },
  thanks: {
    title: `Спасибо за обращение в наш банк.`,
    text: `Наш менеджер скоро свяжется с вами по указанному номеру телефона.`,
    link: `.message-modal`,
  },
};

export const emptyUser = {
  login: ``,
  password: ``,
};

export const getWordForm = (number, wordForms) => {
  const cases = [2, 0, 1, 1, 1, 2];
  number = Math.floor(Math.abs(number)) % 100;

  return wordForms[number > 4 && number < 20 ? 2 : cases[Math.min(number % 10, 5)]];
};

export const getMoneyFormat = (number) => number.toString().split(``).reverse().join(``).match(/\d{0,3}/g).join(` `).split(``).reverse().join(``).trim();
export const getMoney = (number) => `${getMoneyFormat(number)} ${getWordForm(number, [`рубль`, `рубля`, `рублей`])}`;
export const getNum = (string) => +string.replace(/[^0-9]/g, ``);
