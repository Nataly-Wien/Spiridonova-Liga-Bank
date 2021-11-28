import './purpose-select.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {CreditPurposes} from '../../const';

const PurposeSelect = ({purpose, onSelectChange}) => {
  return (
    <select className="purpose-select" name="purpose" value={purpose}
      onChange={(evt) => onSelectChange(evt.target.value)} >
      {Object.values(CreditPurposes).map((item, i) => {
        return (
          <option value={item} key={`${item}`}>{item}</option>
        );
      })}
    </select>
  );
};

PurposeSelect.propTypes = {
  purpose: PropTypes.string,
  onSelectChange: PropTypes.func.isRequired,
};

export default PurposeSelect;
