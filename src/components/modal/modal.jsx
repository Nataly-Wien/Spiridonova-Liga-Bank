import './modal.scss';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useScrollBlock} from '../../hooks/use-scroll-block';
import EnterModal from '../enter-modal/enter-modal';
import MessageModal from '../message-modal/message-modal';
import {ActionCreator} from '../../store/action';
import {PopupTypes} from '../../const';

const Modal = () => {
  const [blockScroll, allowScroll] = useScrollBlock();

  const {modalType, modalProps} = useSelector((state) => state.APPEARANCE);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(ActionCreator.hideModal());
  };

  const handleKeydown = (evt) => {
    if (evt.key === `Escape`) {
      handleModalClose();
    }
  };

  const handleMouseDown = (evt) => {
    if (!evt.target.closest(modalProps.link)) {
      handleModalClose();
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, handleKeydown);
    document.addEventListener(`mousedown`, handleMouseDown);

    return () => {
      document.removeEventListener(`keydown`, handleKeydown);
      document.removeEventListener(`mousedown`, handleMouseDown);
    };
  });

  useEffect(() => {
    modalType && blockScroll();

    return () => {
      allowScroll();
    };
  }, [modalType]);

  if (!modalType) {
    return null;
  }

  const MODAL_POPUPS = {
    [PopupTypes.ENTER]: EnterModal,
    [PopupTypes.THANKS]: MessageModal,
  }

  const CurrentModal = MODAL_POPUPS[modalType];

  return (
    <section className={`modal overlay`}>
      <CurrentModal {...modalProps} onCloseClick={() => handleModalClose()} />
    </section>
  );
};

export default Modal;
