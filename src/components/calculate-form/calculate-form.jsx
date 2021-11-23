import './calculate-form.scss';
import React, {useState, useEffect, useRef} from 'react';
import {ActionCreator} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';
import {CreditPurposes, CreditConstants, getWordForm, getMoney, getMoneyFormat, getNum} from '../../const';

const CalculateForm = () => {
  const purpose = useSelector((state) => state.CREDIT.purpose);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  const [firstPay, setFirstPay] = useState(CreditConstants.FIRST_PAY_MIN[purpose]);
  const [firstPayTotal, setFirstPayTotal] = useState(0);
  const [time, setTime] = useState(CreditConstants.TIME_MIN[purpose]);
  const [mother, setMother] = useState(false);
  const [casco, setCasco] = useState(false);
  const [life, setLife] = useState(false);

  const priceInput = useRef(null);

  useEffect(() => {
    setPrice(0);
    setFirstPay(CreditConstants.FIRST_PAY_MIN[purpose]);
    setTime(CreditConstants.TIME_MIN[purpose]);
    setMother(false);
    setCasco(false);
    setLife(false);

    // priceInput.current.focus();       //если убрать это, убрать и реф из инпута
  }, [purpose]);

  // const getMaxFirstPay = () => {
  //   const credit = mother ? price - CreditConstants.MOTHER_MONEY : price;

  //   return (credit - CreditConstants.MIN_CREDIT[purpose]) / credit;
  // };

  const getCorrectValue = (value, min, max) => Math.min(Math.max(min, value), max);

  const calculateCredit = () => {
    switch (purpose) {
      case CreditPurposes.HYPOTHEC:
        return price - firstPayTotal - mother ? CreditConstants.MOTHER_MONEY : 0;

      case CreditPurposes.AUTO:
        return price - firstPayTotal;

      default: return;
    };
  };


  const calculateRate = () => {
    switch (purpose) {
      case CreditPurposes.HYPOTHEC:
        return firstPay < CreditConstants.RATE_LIMIT[purpose] ? CreditConstants.HYPOTHEC_RATES[0] : CreditConstants.HYPOTHEC_RATES[1];

      case CreditPurposes.AUTO: {
        const check = true;

        switch (check) {
          case (casco && life): return CreditConstants.AUTO_RATES[0];
          case (casco || life): return CreditConstants.AUTO_RATES[1];
          case (price >= CreditConstants.RATE_LIMIT[purpose]): return CreditConstants.AUTO_RATES[2];
          case (price < CreditConstants.RATE_LIMIT[purpose]): return CreditConstants.AUTO_RATES[3];
          // case (!casco && !life && price >= CreditConstants.RATE_LIMIT[purpose]): return CreditConstants.AUTO_RATES[2];
          // case (!casco && !life && price < CreditConstants.RATE_LIMIT[purpose]): return CreditConstants.AUTO_RATES[3];

          default: return;
        }
      }

      default: return;
    }
  };

  const handlePriceChange = (value) => {
    setPrice(value);
    setFirstPayTotal(Math.floor(value * firstPay));
  }

  const handleFirstPayTotalChange = (value) => {
    setFirstPayTotal(value);
    setFirstPay(Math.max(Math.floor((value / price) * 100) / 100), CreditConstants.FIRST_PAY_MIN[purpose]);
  };

  const handleFirstPayChange = (value) => {
    setFirstPay(value);
    setFirstPayTotal(Math.floor(value * price));
  };

  const handleMinusClick = () => {
    handlePriceChange(price - CreditConstants.PRICE_STEP[purpose] >= CreditConstants.PRICE_MIN[purpose] ? price - CreditConstants.PRICE_STEP[purpose] : CreditConstants.PRICE_MIN[purpose]);
    // priceInput.current.focus();
    dispatch(ActionCreator.setCredit(calculateCredit()));
  };

  const handlePlusClick = () => {
    handlePriceChange(price + CreditConstants.PRICE_STEP[purpose]);
    // priceInput.current.focus();
    dispatch(ActionCreator.setCredit(calculateCredit()));
  };

  const handleMotherMoneyChange = (evt) => {
    setMother(evt.target.checked);
    dispatch(ActionCreator.setCredit(calculateCredit()));
  };

  const checkPrice = (value) => {
    const correctPrice = getCorrectValue(getNum(value), CreditConstants.PRICE_MIN[purpose], CreditConstants.PRICE_MAX[purpose]);

    handlePriceChange(correctPrice);
    dispatch(ActionCreator.setCredit(calculateCredit()));
  };

  const checkFirstPay = (value) => {
    // const firstPayCorrect = getCorrectValue(getNum(value), Math.floor(CreditConstants.FIRST_PAY_MIN[purpose] * price), Math.floor(getMaxFirstPay() * price));
    const firstPayCorrect = getCorrectValue(getNum(value), Math.floor(CreditConstants.FIRST_PAY_MIN[purpose] * price), price);
    handleFirstPayTotalChange(Math.floor(firstPayCorrect));
    dispatch(ActionCreator.setCredit(calculateCredit()));
    dispatch(ActionCreator.setRate(calculateRate()));
  };

  const checkTime = (value) => setTime(getCorrectValue(getNum(value), CreditConstants.TIME_MIN[purpose], CreditConstants.TIME_MAX[purpose]));

  const handleKeyUp = (evt, wordForms) => {
    const cursorPos = evt.target.value.length - getWordForm(getNum(evt.target.value), wordForms).length - 1;
    if (evt.target.selectionStart > cursorPos) {
      evt.target.selectionStart = cursorPos;
      evt.target.selectionEnd = cursorPos;
    }
  };

  const handleFocus = (evt) => {
    evt.target.selectionStart = 0;
    evt.target.selectionEnd = 0;
  };

  return (
    <form className="calculate-form" method="post">
      <div className="calculate-form__input-wrapper calculate-form__input-wrapper--price">
        <label className="calculate-form__label" htmlFor="price-field">{`Стоимость ${purpose === CreditPurposes.HYPOTHEC ? `недвижимости` : `автомобиля`}`}</label>
        <input className="calculate-form__control calculate-form__control--input calculate-form__control--input-price" ref={priceInput} type="text" name="price" id="price-field" value={getMoney(price)} onChange={(evt) => handlePriceChange(getNum(evt.target.value))} onBlur={(evt) => checkPrice(evt.target.value)} onKeyUp={(evt) => handleKeyUp(evt, [`рубль`, `рубля`, `рублей`])} onFocus={(evt) => handleFocus(evt)} />
        <p className="calculate-form__note">{`От ${getMoneyFormat(CreditConstants.PRICE_MIN[purpose])} до ${getMoney(CreditConstants.PRICE_MAX[purpose])}`}</p>
        <button className="calculate-form__input-btn calculate-form__input-btn--minus" type="button" onClick={() => handleMinusClick()}>&minus;</button>
        <button className="calculate-form__input-btn calculate-form__input-btn--plus" type="button" onClick={() => handlePlusClick()}>+</button>
      </div>
      <div className="calculate-form__input-wrapper">
        <label className="calculate-form__label" htmlFor="firstPay-field">Первоначальный взнос</label>
        <input className="calculate-form__control calculate-form__control--input" type="text" name="firstPay" id="firstPay-field" value={`${getMoney(firstPayTotal)}`} onChange={(evt) => handleFirstPayTotalChange(getNum(evt.target.value))} onBlur={(evt) => checkFirstPay(evt.target.value)} onKeyUp={(evt) => handleKeyUp(evt, [`рубль`, `рубля`, `рублей`])} onFocus={(evt) => handleFocus(evt)} />
        {/* <input className="calculate-form__control calculate-form__control--input calculate-form--range" type="range" value={firstPay} min={`${CreditConstants.FIRST_PAY_MIN[purpose]}`} max={getMaxFirstPay()} step={CreditConstants.FIRST_PAY_STEP[purpose]} name="range-firstPay" id="firstPay-range-field" onChange={(evt) => handleFirstPayChange(+evt.target.value)} /> */}
        <input className="calculate-form__control calculate-form__control--input calculate-form--range" type="range" value={firstPay} min={`${CreditConstants.FIRST_PAY_MIN[purpose]}`} max={1} step={CreditConstants.FIRST_PAY_STEP[purpose]} name="range-firstPay" id="firstPay-range-field" onChange={(evt) => handleFirstPayChange(+evt.target.value)} onInput={(evt) => dispatch(ActionCreator.setRate(calculateRate()))} />
        <label className="calculate-form__note" htmlFor="firstPay-range-field">{`${Math.floor(firstPay * 100)}%`}</label>
      </div>
      <div className="calculate-form__input-wrapper">
        <label className="calculate-form__label" htmlFor="time-field">Срок кредитования</label>
        <input className="calculate-form__control calculate-form__control--input" type="text" value={`${time} ${getWordForm(time, [`год`, `года`, `лет`])}`} name="time" id="time-field" onChange={(evt) => setTime(getNum(evt.target.value))} onBlur={(evt) => checkTime(evt.target.value)} onKeyUp={(evt) => handleKeyUp(evt, [`год`, `года`, `лет`])} />
        <input className="calculate-form__control calculate-form__control--input calculate-form--range" type="range" value={time} min={`${CreditConstants.TIME_MIN[purpose]}`} max={`${CreditConstants.TIME_MAX[purpose]}`} name="range-time" id="time-range-field" onChange={(evt) => setTime(evt.target.value)} />
        <label className="calculate-form__note calculate-form__note--two-notes" htmlFor="firstPay-range-field">
          <span>{`${CreditConstants.TIME_MIN[purpose]} ${getWordForm(CreditConstants.TIME_MIN[purpose], [`год`, `года`, `лет`])}`}</span>
          <span>{`${CreditConstants.TIME_MAX[purpose]} ${getWordForm(CreditConstants.TIME_MAX[purpose], [`год`, `года`, `лет`])}`}</span>
        </label>
      </div>
      {purpose === CreditPurposes.HYPOTHEC &&
        <div className="calculate-form__input-wrapper calculate-form__input-wrapper--checkbox">
          <input className="visually-hidden" type="checkbox" checked={mother} name="mother" id="mother-field" onChange={(evt) => handleMotherMoneyChange(evt)}></input>
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
