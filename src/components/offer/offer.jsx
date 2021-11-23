import './offer.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import {CreditConstants, getMoney} from '../../const';

const Offer = () => {
  const purpose = useSelector((state) => state.CREDIT.purpose);
  const credit = useSelector((state) => state.CREDIT.credit);
  const rate = useSelector((state) => state.CREDIT.rate);
  const month = useSelector((state) => state.CREDIT.month);
  const income = useSelector((state) => state.CREDIT.income);

  const isOffer = credit !== 0 && credit <= CreditConstants.MIN_CREDIT[purpose];

  return (
    <div className="credit-calc__offer offer">
      <h3 className="offer__title">{`${isOffer ? `Наш банк не выдаёт ипотечные кредиты меньше ${getMoney(CreditConstants.MIN_CREDIT[purpose])}.` : `Наше предложение`}`}</h3>
      <p>{getMoney(credit)}</p>
      <p>Сумма ипотеки</p>
      <p>{`${rate * 100}%`}</p>
      <p>Процентная ставка</p>
      <p>{getMoney(month)}</p>
      <p>Ежемесячный платеж</p>
      <p>{getMoney(income)}</p>
      <p>Необходимый доход</p>
    </div>
  );
};

export default Offer;
