import './credit-calculator.scss';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PurposeSelect from '../purpose-select/purpose-select';
import CreditOptions from '../credit-options/credit-options';
import Offer from '../offer/offer';
import {CreditPurposes} from '../../const';

const CreditCalculator = () => {
  const dispatch = useDispatch();
  const purpose = useSelector((state) => state.CREDIT.purpose);

  const handlePurposeChange = (purpose) => {
    dispatch(ActionCreator.setPurpose(purpose));
  }

  return (
    <section className="credit-calc container" id="#credit-calculator">
      <h2 className="credit-calc__title">Кредитный калькулятор</h2>
      <div className="credit-calc__wrapper">
        <div>
          <h3 className="credit-calc__sub-title">Шаг 1. Цель кредита</h3>
          <PurposeSelect purpose={purpose} onSelectChange={handlePurposeChange} />
          {(purpose !== CreditPurposes.NONE) && <CreditOptions />}
        </div>
        {(purpose !== CreditPurposes.NONE) && <Offer />}
      </div>

    </section>
  );
};

export default CreditCalculator;
