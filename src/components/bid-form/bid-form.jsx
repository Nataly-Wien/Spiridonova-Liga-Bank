import './bid-form.scss';
import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NumberFormat from 'react-number-format';
import {ActionCreator} from '../../store/action';
import {CreditPurposes, PurposeConstants, getMoney, getTerm, MODAL_POPUPS, PopupTypes} from '../../const';

const BidForm = () => {
  const EMPTY_INPUTS = {
    name: ``,
    tel: ``,
    email: ``,
  };

  const inputRefs = {
    name: useRef(null),
    tel: useRef(null),
    email: useRef(null),
  };

  const [inputs, setInputs] = useState(EMPTY_INPUTS);
  const [isExitWithSaving, setIsExitWithSaving] = useState(false);
  const [isFieldFocused, setIsFieldFocused] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const purpose = useSelector((state) => state.CREDIT_CALC.purpose);
  const number = useSelector((state) => state.BID.bidNumber) + 1;
  const price = getMoney(useSelector((state) => state.CREDIT_CALC.price));
  const firstPay = getMoney(useSelector((state) => state.CREDIT_CALC.firstPay));
  const time = getTerm(useSelector((state) => state.CREDIT_CALC.time));

  const dispatch = useDispatch();

  const handleInputChange = (value, fieldName) => {
    setInputs({
      ...inputs,
      [fieldName]: value,
    });
    setIsFormInvalid(false);
  };

  const handleKeydown = (evt) => {
    if (evt.key === `Escape`) {
      dispatch(ActionCreator.setBidSHow(false));
    }
  };

  const isTelNumberValid = (string) => string.replace(/[^0-9]/g, ``).length === 11;

  const validateInput = (inputName, isInvalid) => {
    if ((inputName !== `tel` && !inputs[inputName].trim()) || (inputName === `tel` && !isTelNumberValid(inputs[inputName]))) {
      setInputs({
        ...inputs,
        [inputName]: ``,
      });

      inputRefs[inputName].current.focus();
      isInvalid = true;
    }

    return isInvalid;
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const isInvalid = Object.keys(inputs).reverse().reduce((isInvalid, item) => validateInput(item, isInvalid), false);
    setIsFormInvalid(isInvalid);

    if (isInvalid) {
      return;
    };

    setIsExitWithSaving(true);

    const newBid = {
      number: number,
      purpose: purpose,
      price: price,
      firstPay: firstPay,
      time: time,
      name: inputs.name,
      tel: inputs.tel,
      email: inputs.email,
    };

    saveToLocalStorage(inputs);
    dispatch(ActionCreator.addBid(newBid));
    dispatch(ActionCreator.setBidNumber(number));
    dispatch(ActionCreator.setBidSHow(false));
    dispatch(ActionCreator.setPurpose(CreditPurposes.NONE));
    dispatch(ActionCreator.showModal({
      modalType: PopupTypes.THANKS,
      modalProps: MODAL_POPUPS.thanks,
    }));
  };

  const saveToLocalStorage = (data) => {
    Object.keys(data).forEach((item) => {
      localStorage.setItem(item, data[item]);
    });
  };

  useEffect(() => {
    document.addEventListener(`keydown`, handleKeydown);

    setInputs(EMPTY_INPUTS);

    if (inputRefs.name.current) {
      inputRefs.name.current.focus();
    }

    if (isExitWithSaving) {
      saveToLocalStorage(inputs);
    }

    return () => {
      document.removeEventListener(`keydown`, handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExitWithSaving, purpose]);

  return (
    <form className={`bid${isFormInvalid ? ` bid--invalid` : ``}`} action="https://echo.htmlacademy.ru/" method="post" onSubmit={(evt) => handleFormSubmit(evt)}>
      <h2 className="bid__sub-title sub-title">Шаг 3. Оформление заявки</h2>
      <div className="bid__string-wrapper">
        <p className="bid__value">{`№ ${number.toString().padStart(4, `0`)}`}</p>
        <p className="bid__name">Номер заявки</p>
      </div>
      <div className="bid__string-wrapper">
        <p className="bid__value">{PurposeConstants[purpose][0]}</p>
        <p className="bid__name">Цель кредита</p>
      </div>
      <div className="bid__string-wrapper">
        <p className="bid__value">{price}</p>
        <p className="bid__name">{PurposeConstants[purpose][1]}</p>
      </div>
      <div className="bid__string-wrapper">
        <p className="bid__value">{firstPay}</p>
        <p className="bid__name">Первоначальный взнос</p>
      </div>
      <div className="bid__string-wrapper">
        <p className="bid__value">{time}</p>
        <p className="bid__name">Срок кредитования</p>
      </div>
      <label className="visually-hidden" htmlFor="name-field">ФИО</label>
      <input className="bid__input bid__input--name input" type="text" value={inputs.name} ref={inputRefs.name} id="name-field" name="name" placeholder="ФИО" onChange={(evt) => handleInputChange(evt.target.value, `name`)} ></input>
      <div className="bid__input-wrapper">
        <label className="visually-hidden" htmlFor="tel-field">Телефон</label>
        <NumberFormat className="bid__input input" format="+7(###)###-##-##" allowEmptyFormatting={isFieldFocused} mask="_" type="tel" value={inputs.tel} id="tel-field" getInputRef={inputRefs.tel} name="tel" placeholder="Телефон" onValueChange={(values) => handleInputChange(values.formattedValue, `tel`)} onFocus={() => setIsFieldFocused(true)} onBlur={() => setIsFieldFocused(false)} />
        <label className="visually-hidden" htmlFor="email-field">E-mail</label>
        <input className="bid__input input" type="email" value={inputs.email} ref={inputRefs.email} id="email-field" name="email" placeholder="E-mail" onChange={(evt) => handleInputChange(evt.target.value, `email`)} ></input>
      </div>
      <button className="bid__button button button--blue" type="submit">Отправить</button>
    </form>
  );
};

export default BidForm;
