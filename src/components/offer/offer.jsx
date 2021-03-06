import './offer.scss';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {CreditConstants, CreditPurposes, getMoney, getCommaFormat} from '../../const';

const Offer = () => {
  const purpose = useSelector((state) => state.CREDIT_CALC.purpose);
  const credit = useSelector((state) => state.CREDIT_CALC.credit);
  const rate = useSelector((state) => state.CREDIT_CALC.rate);
  const monthPay = useSelector((state) => state.CREDIT_CALC.monthPay);
  const income = useSelector((state) => state.CREDIT_CALC.income);
  const dispatch = useDispatch();

  const isOffer = credit !== 0 && credit >= CreditConstants.MIN_CREDIT[purpose];

  return (
    <div className="credit-calc__offer offer">
      <h3 className="offer__title">{`${isOffer ? `Наше предложение` : `Наш банк не выдаёт ипотечные кредиты меньше ${getMoney(CreditConstants.MIN_CREDIT[purpose])}.`}`}</h3>
      {isOffer && <React.Fragment>
        <div className="offer__wrapper">
          <div className="offer__offer-wrapper">
            <p className="offer__value">{getMoney(credit)}</p>
            <p className="offer__name">{`Сумма ${purpose === CreditPurposes.HYPOTHEC ? `ипотеки` : `кредита`} `}</p>
          </div>
          <div className="offer__offer-wrapper">
            <p className="offer__value">{`${getCommaFormat((rate * 100).toFixed(2))}%`}</p>
            <p className="offer__name">Процентная ставка</p>
          </div>
          <div className="offer__offer-wrapper">
            <p className="offer__value">{getMoney(monthPay)}</p>
            <p className="offer__name">Ежемесячный платеж</p>
          </div>
          <div className="offer__offer-wrapper">
            <p className="offer__value">{getMoney(income)}</p>
            <p className="offer__name">Необходимый доход</p>
          </div>
        </div>
        <button className="offer__button button button--blue" type="button" onClick={() => dispatch(ActionCreator.setBidSHow(true))}>Оформить заявку</button>
      </React.Fragment>}
      {!isOffer && <p className="offer__note">Попробуйте использовать другие параметры&nbsp;для&nbsp;расчёта.</p>}
    </div>
  );
};

export default Offer;
