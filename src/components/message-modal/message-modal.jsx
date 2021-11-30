import './message-modal.scss';
import React, {useEffect} from 'react';

const MessageModal = ({title, text, onCloseClick}) => {

  const handleKeydown = (evt) => {
    if (evt.key === 'Tab') {
      evt.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, handleKeydown);

    return () => {
      document.removeEventListener(`keydown`, handleKeydown);
    };
  });

  return (
    <div className="message-modal">
      <h3 className="message-modal__subtitle">{title}</h3>
      <p className="message-modal__message">{text}</p>
      <button className="message-modal__close-btn" onClick={() => onCloseClick()}><span className="visually-hidden">Закрыть</span></button>
    </div>
  );
};

export default MessageModal;
