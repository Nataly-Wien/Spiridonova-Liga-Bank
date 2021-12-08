import './header.scss';
import React, {useState, useEffect, useRef} from 'react';
import Logo from '../logo/logo';
import MainMenu from '../main-menu/main-menu';
import UserNav from '../user-nav/user-nav';
import {useScrollBlock} from '../../hooks/use-scroll-block';
import {LogoTypes} from '../../const';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    document.addEventListener(`mousedown`, handleMouseDown);

    return () => {
      document.removeEventListener(`mousedown`, handleMouseDown);
    };
  });

  const handleMobileMenuOpenClose = (isOpen) => {
    isOpen ? blockScroll() : allowScroll();
    setIsMobileMenuOpen(isOpen);
  };

  const handleMouseDown = (evt) => {
    if (isMobileMenuOpen && !evt.target.closest(`.header__main-nav`) && !evt.target.closest(`.header__wrapper`)) {
      handleMobileMenuOpenClose(false);
    }
  };

  const firstFocusTarget = useRef(null);
  const lastFocusTarget = useRef(null);

  const handleKeyDown = (evt) => {
    console.log(evt.target);
    if (evt.key === 'Tab' && !evt.shiftKey && evt.target.closest(`.header__close-button`)) {
      evt.preventDefault();
      firstFocusTarget.current.focus();
    }

    if (evt.key === 'Tab' && evt.shiftKey && evt.target.closest(`.header__menu-button`)) {
      evt.preventDefault();
      lastFocusTarget.current.focus();
    }
  };

  return (
    <header className={`header${isMobileMenuOpen ? ` header--mobile-menu` : ``}`}>
      <nav className={`header__main-nav${isMobileMenuOpen ? ` header__main-nav--open` : ``} container`} onKeyDown={handleKeyDown}>
        <button className={"header__menu-button"} type="button" aria-label="Меню сайта" ref={firstFocusTarget} onClick={() => handleMobileMenuOpenClose(true)}>
          <span></span>
        </button>
        <div className={`header__logo-wrapper${isMobileMenuOpen ? ` header__logo-wrapper--open` : ``}`}>
          <Logo type={LogoTypes.HEADER} />
        </div>
        <div className={`header__menu${!isMobileMenuOpen ? ` header__menu--hidden` : ``}`}>
          <MainMenu />
        </div>
        <UserNav isOpen={isMobileMenuOpen} />
        {isMobileMenuOpen && <button className={"header__close-button"} type="button" ref={lastFocusTarget} onClick={() => handleMobileMenuOpenClose(false)}>
          <span className="visually-hidden">Закрыть</span>
        </button>}
      </nav>
    </header>
  );
};

export default Header;
