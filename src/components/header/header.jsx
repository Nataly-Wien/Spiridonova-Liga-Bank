import './header.scss';
import React, {useState, useEffect, useRef} from 'react';
import MainMenu from '../main-menu/main-menu';
import UserNav from '../user-nav/user-nav';
import {useScrollBlock} from '../../hooks/use-scroll-block';
import logoDesktop from './../../img/logo_ligabank_desktop.svg';
import logoTablet from './../../img/logo_ligabank_tablet.svg';
import logoMobile from './../../img/logo_ligabank_mobile.svg';

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
    if (evt.key === 'Tab' && !evt.shiftKey && evt.target.closest(`.header__button`)) {
      evt.preventDefault();
      firstFocusTarget.current.focus();
    }

    if (evt.key === 'Tab' && evt.shiftKey && evt.target.closest(`.menu__link--header-first`)) {
      evt.preventDefault();
      lastFocusTarget.current.focus();
    }
  };

  return (
    <header className={`header${isMobileMenuOpen ? ` header--mobile-menu` : ``}`}>
      <nav className="header__main-nav container" onKeyDown={handleKeyDown}>
        <button className={"header__menu-button"} type="button" aria-label="Меню сайта" ref={firstFocusTarget} onClick={() => handleMobileMenuOpenClose(true)}>
          <span></span>
        </button>
        <a className="header__logo" href="#">
          <picture>
            <source media="(min-width: 1024px)" srcSet={logoDesktop} />
            <source media="(min-width: 768px)" srcSet={logoTablet} />
            <img className="header__logo-img" src={logoMobile} alt="Логотип Лига Банка" />
          </picture>
        </a>
        <div className={`header__wrapper${isMobileMenuOpen ? ` header__wrapper--open` : ``}`}>
          <div className={`header__menu${!isMobileMenuOpen ? ` header__menu--hidden` : ``}`}>
            <MainMenu />
          </div>
          <UserNav isOpen={isMobileMenuOpen} />
        </div>
        {isMobileMenuOpen && <button className={"header__close-button"} type="button" ref={lastFocusTarget} onClick={() => handleMobileMenuOpenClose(false)}>
          <span className="visually-hidden">Закрыть</span>
        </button>}
      </nav>
    </header>
  );
};

export default Header;
