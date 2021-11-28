import './calculate-form.scss';
import React, {useState, useEffect} from 'react';
import {ActionCreator} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';
import NumberFormat from 'react-number-format';
import {CreditPurposes, CreditConstants, PurposeConstants, getWordForm, getTerm, getMoney, getMoneyFormat, getNum} from '../../const';

const CalculateForm = () => {
  const purpose = useSelector((state) => state.CREDIT_CALC.purpose);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(CreditConstants.PRICE_INITIAL[purpose]);
  const [firstPay, setFirstPay] = useState(CreditConstants.FIRST_PAY_MIN[purpose]);
  const [firstPayTotal, setFirstPayTotal] = useState(Math.floor(firstPay * price));
  const [time, setTime] = useState(CreditConstants.TIME_MIN[purpose]);
  const [mother, setMother] = useState(false);
  const [casco, setCasco] = useState(false);
  const [life, setLife] = useState(false);

  const [isInputCorrect, setIsInputCorrect] = useState(true);

  useEffect(() => {
    setPrice(CreditConstants.PRICE_INITIAL[purpose]);
    setFirstPay(CreditConstants.FIRST_PAY_MIN[purpose]);
    setFirstPayTotal(Math.floor(firstPay * price));
    setTime(CreditConstants.TIME_MIN[purpose]);
    setMother(false);
    setCasco(false);
    setLife(false)
  }, [purpose]);

  useEffect(() => {
    calculateOffer();
  }, [price, firstPay, time, mother, casco, life]);


  const calculateOffer = () => {
    let currentCredit = 0;
    let currentRate = 0;

    switch (purpose) {
      case CreditPurposes.HYPOTHEC:
        currentCredit = price - firstPayTotal - (mother ? CreditConstants.MOTHER_MONEY : 0);
        currentRate = firstPay < CreditConstants.RATE_LIMIT[purpose] ? CreditConstants.HYPOTHEC_RATES[0] : CreditConstants.HYPOTHEC_RATES[1];
        break;

      case CreditPurposes.AUTO:
        currentCredit = price - firstPayTotal;

        switch (true) {
          case (casco && life):
            currentRate = CreditConstants.AUTO_RATES[0];
            break;

          case (casco || life):
            currentRate = CreditConstants.AUTO_RATES[1];
            break;

          case (price >= CreditConstants.RATE_LIMIT[purpose]):
            currentRate = CreditConstants.AUTO_RATES[2];
            break;

          case (price < CreditConstants.RATE_LIMIT[purpose]):
            currentRate = CreditConstants.AUTO_RATES[3];
            break;
          // no default
        }
        break;
      // no default
    };

    const currentMonthPay = Math.floor((currentCredit * currentRate) / (1 - (Math.pow(1 + currentRate, time * -12))));
    const currentIncome = Math.floor(currentMonthPay / CreditConstants.INCOME_LIMIT);

    dispatch(ActionCreator.setCredit(currentCredit));
    dispatch(ActionCreator.setRate(currentRate));
    dispatch(ActionCreator.setMonthPay(currentMonthPay));
    dispatch(ActionCreator.setIncome(currentIncome));
    dispatch(ActionCreator.setPrice(price));
    dispatch(ActionCreator.setFirstPay(firstPayTotal));
    dispatch(ActionCreator.setTime(time));
  };

  const getCorrectValue = (value, min, max) => Math.min(Math.max(min, value), max);

  const handlePriceChange = (value) => {
    setPrice(value);
    handleFirstPayTotalChange(Math.floor(value * firstPay));
    setIsInputCorrect(value >= CreditConstants.PRICE_MIN[purpose] && value <= CreditConstants.PRICE_MAX[purpose]);
  };

  const handleFirstPayTotalChange = (value) => {
    const rate = ((value / price) * 100) / 100;
    setFirstPayTotal(value);
    isNaN(rate) || rate === Infinity || rate === 0 ? setFirstPay(CreditConstants.FIRST_PAY_MIN[purpose]) : setFirstPay(Math.max(rate, CreditConstants.FIRST_PAY_MIN[purpose]));
  };

  const handleFirstPayChange = (value) => {
    setFirstPay(value);
    setFirstPayTotal(Math.floor(value * price));
  };

  const handleMinusClick = () => {
    const currentPrice = price - CreditConstants.PRICE_STEP[purpose] >= CreditConstants.PRICE_MIN[purpose] ? price - CreditConstants.PRICE_STEP[purpose] : CreditConstants.PRICE_MIN[purpose];
    handlePriceChange(currentPrice);
  };

  const handlePlusClick = () => {
    const currentPrice = price + CreditConstants.PRICE_STEP[purpose] <= CreditConstants.PRICE_MAX[purpose] ? price + CreditConstants.PRICE_STEP[purpose] : CreditConstants.PRICE_MAX[purpose];
    handlePriceChange(currentPrice);
  };

  const checkFirstPay = (value) => {
    const firstPayCorrect = getCorrectValue(getNum(value), Math.floor(CreditConstants.FIRST_PAY_MIN[purpose] * price), price);
    handleFirstPayTotalChange(Math.floor(firstPayCorrect));
  };

  const checkTime = (value) => {
    setTime(getCorrectValue(getNum(value), CreditConstants.TIME_MIN[purpose], CreditConstants.TIME_MAX[purpose]));
  };

  return (
    <form className="calculate-form" method="post" id="calculate">
      <div className="calculate-form__input-wrapper calculate-form__input-wrapper--price">
        <label className="calculate-form__label" htmlFor="price-field">{PurposeConstants[purpose][1]}</label>
        <NumberFormat className={`calculate-form__control calculate-form__control--input-price input${!isInputCorrect ? ` calculate-form__control--input-incorrect` : ``}`} value={price} displayType="input" thousandSeparator={` `} suffix={`${getWordForm(price, [` рубль`, ` рубля`, ` рублей`])}${!isInputCorrect ? `     Некорректное значение` : ``}`} id="price-field" name="price" onValueChange={(values) => handlePriceChange(values.floatValue)} />
        <p className="calculate-form__note">{`От ${getMoneyFormat(CreditConstants.PRICE_MIN[purpose])} до ${getMoney(CreditConstants.PRICE_MAX[purpose])}`}</p>
        <button className="calculate-form__input-btn calculate-form__input-btn--minus" type="button" onClick={() => handleMinusClick()}>&minus;</button>
        <button className="calculate-form__input-btn calculate-form__input-btn--plus" type="button" onClick={() => handlePlusClick()}>+</button>
      </div>
      <div className="calculate-form__input-wrapper">
        <label className="calculate-form__label" htmlFor="firstPay-field">Первоначальный взнос</label>
        <NumberFormat className="calculate-form__control input" value={firstPayTotal} displayType="input" thousandSeparator={` `} suffix={`${getWordForm(firstPayTotal, [` рубль`, ` рубля`, ` рублей`])}`} id="firstPay-field" name="firstPay" onValueChange={(values) => handleFirstPayTotalChange(values.floatValue)} onBlur={(evt) => checkFirstPay(evt.target.value)} />
        <input className="calculate-form__control" type="range" value={firstPay} min={`${CreditConstants.FIRST_PAY_MIN[purpose]}`} max={1} step={CreditConstants.FIRST_PAY_STEP[purpose]} name="range-firstPay" id="firstPay-range-field" onChange={(evt) => handleFirstPayChange(+evt.target.value)} />
        <label className="calculate-form__note" htmlFor="firstPay-range-field">{`${Math.floor(firstPay * 100)}%`}</label>
      </div>
      <div className="calculate-form__input-wrapper">
        <label className="calculate-form__label" htmlFor="time-field">Срок кредитования</label>
        <NumberFormat className="calculate-form__control input" value={time} displayType="input" suffix={`${getWordForm(time, [` год`, ` года`, ` лет`])}`} id="time-field" name="time" onValueChange={(values) => setTime(values.floatValue)} onBlur={(evt) => checkTime(evt.target.value)} />
        <input className="calculate-form__control" type="range" value={time} min={`${CreditConstants.TIME_MIN[purpose]}`} max={`${CreditConstants.TIME_MAX[purpose]}`} name="range-time" id="time-range-field" onChange={(evt) => setTime(+evt.target.value)} />
        <label className="calculate-form__note calculate-form__note--two-notes" htmlFor="firstPay-range-field">
          <span>{`${getTerm(CreditConstants.TIME_MIN[purpose])}`}</span>
          <span>{`${getTerm(CreditConstants.TIME_MAX[purpose])}`}</span>
        </label>
      </div>
      {purpose === CreditPurposes.HYPOTHEC &&
        <div className="calculate-form__input-wrapper calculate-form__input-wrapper--checkbox">
          <input className="visually-hidden" type="checkbox" checked={mother} name="mother" id="mother-field" onChange={(evt) => setMother(evt.target.checked)}></input>
          <label className="calculate-form__label calculate-form__label--checkbox" htmlFor="mother-field">Использовать материнский капитал</label>
        </div>}
      {purpose === CreditPurposes.AUTO &&
        <React.Fragment>
          <div className="calculate-form__input-wrapper calculate-form__input-wrapper--checkbox">
            <input className="visually-hidden" type="checkbox" checked={casco} name="casco" id="casco-field" onChange={(evt) => setCasco(evt.target.checked)}></input>
            <label className="calculate-form__label calculate-form__label--checkbox" htmlFor="casco-field">Оформить КАСКО в нашем банке</label>
          </div>
          <div className="calculate-form__input-wrapper calculate-form__input-wrapper--checkbox">
            <input className="visually-hidden" type="checkbox" checked={life} name="life" id="life-field" onChange={(evt) => setLife(evt.target.checked)}></input>
            <label className="calculate-form__label calculate-form__label--checkbox" htmlFor="life-field">Оформить Страхование жизни в нашем банке</label>
          </div>
        </React.Fragment>}
    </form>
  );
};

export default CalculateForm;
