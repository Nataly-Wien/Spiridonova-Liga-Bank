import './purpose-select.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {CreditPurposes} from '../../const';

const PurposeSelect = ({currentPurpose, onSelectChange}) => {
  return (
    <div className={`purpose-select`}>
      <select className="purpose-select__select" name="purpose" defaultValue={currentPurpose}
        onChange={(evt) => onSelectChange(evt.target.value)} >
        {Object.values(CreditPurposes).map((item, i) => {
          return (
            <option value={item} key={`${item}`}>{item}</option>
          );
        })}
      </select>
    </div>
  );
};

PurposeSelect.propTypes = {
  currentPurpose: PropTypes.string,
  onSelectChange: PropTypes.func.isRequired,
};

export default PurposeSelect;
