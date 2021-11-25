import './offer.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import {CreditConstants, getMoney, getCommaFormat} from '../../const';

const Offer = () => {
  const purpose = useSelector((state) => state.CREDIT.purpose);
  const credit = useSelector((state) => state.CREDIT.credit);
  const rate = useSelector((state) => state.CREDIT.rate);
  const monthPay = useSelector((state) => state.CREDIT.monthPay);
  const income = useSelector((state) => state.CREDIT.income);

  const isOffer = credit !== 0 && credit >= CreditConstants.MIN_CREDIT[purpose];

  return (
    <div className="credit-calc__offer offer">
      <h3 className="offer__title">{`${isOffer ? `Наше предложение` : `Наш банк не выдаёт ипотечные кредиты меньше ${getMoney(CreditConstants.MIN_CREDIT[purpose])}.`}`}</h3>
      {isOffer && <React.Fragment>
        <div className="offer__wrapper">
          <div className="offer__offer-wrapper">
            <p className="offer__value">{getMoney(credit)}</p>
            <p className="offer__name">Сумма ипотеки</p>
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
        <button className="offer__button button button--blue">Оформить заявку</button>
      </React.Fragment>}
      {!isOffer && <p className="offer__note">Попробуйте использовать другие параметры&nbsp;для&nbsp;расчёта.</p>}
    </div>
  );
};

export default Offer;
