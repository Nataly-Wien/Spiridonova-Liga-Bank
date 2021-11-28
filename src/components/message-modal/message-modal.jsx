import './message-modal.scss';
import React from 'react';

const MessageModal = ({title, text, onCloseClick}) => {
  return (
    <div className="message-modal">
      <h3 className="message-modal__subtitle">{title}</h3>
      <p className="message-modal__message">{text}</p>
      <button className="message-modal__close-btn" onClick={() => onCloseClick()}><span className="visually-hidden">Закрыть</span></button>
    </div>
  );
};

export default MessageModal;
