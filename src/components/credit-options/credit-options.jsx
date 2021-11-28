import './credit-options.scss';
import React from 'react';
import CalculateForm from '../calculate-form/calculate-form';
const CreditOptions = () => {

  return (
    <div className={`credit-calc__credit-options credit-options`}>
      <h3 className="credit-options__sub-title sub-title">Шаг 2. Введите параметры кредита</h3>
      <CalculateForm />
    </div>
  );
};

export default CreditOptions;
