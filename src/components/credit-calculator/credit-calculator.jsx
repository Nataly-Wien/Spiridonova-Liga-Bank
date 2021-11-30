import './credit-calculator.scss';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor'
import {ActionCreator} from '../../store/action';
import PurposeSelect from '../purpose-select/purpose-select';
import CreditOptions from '../credit-options/credit-options';
import Offer from '../offer/offer';
import BidForm from '../bid-form/bid-form';
import {CreditPurposes} from '../../const';

const CreditCalculator = () => {
  const dispatch = useDispatch();
  const purpose = useSelector((state) => state.CREDIT_CALC.purpose);
  const isBidShow = useSelector((state) => state.APPEARANCE.isBidShow);

  const handlePurposeChange = (purpose) => {
    dispatch(ActionCreator.setPurpose(purpose));
  }

  useEffect(() => {
  }, [purpose]);

  return (
    <ScrollableAnchor id={`link1`} >
      <section className="credit-calc container">
        <h2 className="credit-calc__title title">Кредитный калькулятор</h2>
        <div className="credit-calc__wrapper">
          <div>
            <h3 className="credit-calc__sub-title sub-title">Шаг 1. Цель кредита</h3>
            <PurposeSelect purpose={purpose} onSelectChange={handlePurposeChange} />
            {(purpose !== CreditPurposes.NONE) && <CreditOptions />}
          </div>
          {(purpose !== CreditPurposes.NONE) && <Offer />}
        </div>
        {(purpose !== CreditPurposes.NONE) && isBidShow && <BidForm />}
      </section>
    </ScrollableAnchor>

  );
};

export default CreditCalculator;
