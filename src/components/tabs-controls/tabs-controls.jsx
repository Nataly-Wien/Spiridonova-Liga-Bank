import './tabs-controls.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {TABS, getTabsIcon} from '../../const';
import {useScrollOffset} from '../../hooks/use-scroll-offset';

const TabControls = ({currentTab, onTabClick, onTabsScroll, children}) => {
  const [scrollRef, handleScroll] = useScrollOffset(onTabsScroll);

  return (
    <div className="tabs-controls ">
      <ul className="tabs-controls__list tabs-controls__list--hidden">
        {TABS.map((item, i) => {
          return (
            <li className="tabs-controls__item" key={`${item.name}`}>
              <button className={`tabs-controls__button${i === currentTab ? ` tabs-controls__button--current`
                : ``}`} type="button" onClick={() => onTabClick(i)}>
                <span className="tabs-controls__button-icon">{getTabsIcon(item.icon)}</span>
                <span className="tabs-controls__button-text">{item.name}</span>
              </button>
            </li>);
        })}
      </ul >
      <div className="tabs-controls__wrapper" ref={scrollRef} onScroll={() => handleScroll()}>
        {children}
      </div>
    </div>
  );
};

TabControls.propTypes = {
  currentTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
  onTabsScroll: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,

};

export default TabControls;
