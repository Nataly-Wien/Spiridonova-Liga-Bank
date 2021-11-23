import './enter-modal.scss';
import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import logo from './../../img/logo_ligabank_online-bank.svg';

const EnterModal = ({onCloseClick}) => {
  const EMPTY_INPUTS = {
    login: ``,
    password: ``,
  };

  const [inputs, setInputs] = useState(EMPTY_INPUTS);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isExitWithSaving, setIsExitWithSaving] = useState(false);

  const firstFocusTarget = useRef(null);
  const lastFocusTarget = useRef(null);
  const loginField = useRef(null);
  const passwordField = useRef(null);

  const dispatch = useDispatch();

  const saveToLocalStorage = (data) => {
    Object.keys(data).forEach((item) => {
      localStorage.setItem(item, data[item]);
    });
  };

  useEffect(() => {
    setInputs(EMPTY_INPUTS);

    if (loginField.current) {
      loginField.current.focus();
    }
  }, [isExitWithSaving]);

  const getNewInputValues = (name, value) => {

    const newState = {
      ...inputs,
    };

    newState[name] = value;

    return newState;
  };

  const handleInputChange = (evt, fieldName) => setInputs(getNewInputValues(fieldName, evt.target.value));

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!inputs.login.trim()) {
      setInputs(getNewInputValues(`login`, ``));
      loginField.current.focus();
      return;
    }

    if (!inputs.password.trim()) {
      setInputs(getNewInputValues(`password`, ``));
      passwordField.current.focus();
      return;
    }

    setIsExitWithSaving(true);
    dispatch(ActionCreator.setUser(inputs));
    saveToLocalStorage(inputs);

    onCloseClick();
  };

  const handleKeydown = (evt) => {
    if (evt.key === 'Tab' && !evt.shiftKey && evt.target.closest(`.login-form__close-btn`)) {
      evt.preventDefault();
      firstFocusTarget.current.focus();
    }

    if (evt.key === 'Tab' && evt.shiftKey && evt.target.closest(`.login-form__logo`)) {
      evt.preventDefault();
      lastFocusTarget.current.focus();
    }
  };

  return (
    <form className="login-form" action="https://echo.htmlacademy.ru/" method="post" name="review" onKeyDown={handleKeydown} onSubmit={handleFormSubmit}>
      <div className="login-form__logo-wrapper">
        <a className="login-form__logo" href="#" ref={firstFocusTarget} >
          <img className="login-form__logo-img" src={logo} width="151" height="29" alt="Логотип Лига Банк" />
        </a>
        <h2 className="login-form__title">интернет-банк</h2>
      </div>
      <p className="login-form__input-wrapper">
        <label className="login-form__label" htmlFor="login-field">Логин</label>
        <input className="login-form__control login-form__control--input login-form__control--input-name" ref={loginField} type="text" name="login" id="login-field" value={inputs.login} onChange={(evt) => handleInputChange(evt, `login`)} required={true} />
      </p>
      <p className="login-form__input-wrapper login-form__input-wrapper--password">
        <label className="login-form__label" htmlFor="login-field">Пароль</label>
        <input className="login-form__control login-form__control--input login-form__control--input-password" type={`${isPasswordVisible ? `text` : `password`}`} name="password" id="password-field" value={inputs.password} onChange={(evt) => handleInputChange(evt, `password`)} required={true} ref={passwordField} />
        <button className={`login-form__input-button login-form__input-button--${isPasswordVisible ? `visible` : `hidden`}`} onMouseDown={() => setPasswordVisible(true)} onMouseUp={() => setPasswordVisible(false)} tabIndex="-1"></button>
        <a className="login-form__link" href="#" onClick={() => onCloseClick()}>Забыли пароль?</a>
      </p>
      <button className="login-form__send-btn button button--blue" type="submit">Войти</button>
      <button className="login-form__close-btn" type="button" onClick={() => onCloseClick()} ref={lastFocusTarget}>
        <span className="visually-hidden">Закрыть</span>
      </button>
    </form>

  );
};

export default EnterModal;
