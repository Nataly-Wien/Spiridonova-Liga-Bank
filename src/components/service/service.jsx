import './service.scss';
import React from "react";
import PropTypes from 'prop-types';

const Service = ({title, features, text, textLink, buttonText, buttonRef, tabNumber, currentTab}) => {
  return (
    <div className={`service service--tab${tabNumber}${tabNumber !== currentTab + 1 ? ` service--hidden` : ``}`}>
      <div className={`service__wrapper service__wrapper--tab${tabNumber}`}>
        {title && <h2 className={`service__title service__title--tab${tabNumber}`}>{title}</h2>}
        {(features.length > 0) && <ul className={`service__features-list service__features-list--tab${tabNumber}`}>
          {features.map((item) => {
            return (
              <li className="service__features-item" key={`${item}`}>{item}</li>
            );
          })}
        </ul>}
        {text && <p className="service__text">{text}<a className="service__text-link" href={`#${buttonRef}`}>{textLink}</a></p>}
        {buttonText && <a className={"service__button button button--blue"} href={`#${buttonRef}`}>{buttonText}</a>}
      </div>
    </div >
  );
};

Service.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  textLink: PropTypes.string,
  buttonText: PropTypes.string,
  buttonRef: PropTypes.string,
  tabNumber: PropTypes.number,
  currentTab: PropTypes.number,
};

export default Service;
