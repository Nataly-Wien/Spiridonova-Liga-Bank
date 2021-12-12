import './purpose-select.scss';
import React, {useMemo, useState} from 'react';
import Select, {components} from 'react-select';
import PropTypes from 'prop-types';
import {CreditPurposes} from '../../const';

const PurposeSelect = ({purpose, onSelectChange}) => {
  const [value, setValue] = useState({
    value: purpose,
    label: purpose,
  });

  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState(false);

  const options = useMemo(() =>
    Object.values(CreditPurposes).map((item) => ({
      value: item,
      label: item,
    })), []
  );

  const cases = useMemo(() =>
    Object.values(CreditPurposes).map((item) => item), []
  );

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L9 9L17 1" stroke="#1F1E25" strokeWidth="2" />
        </svg>
      </components.DropdownIndicator>
    );
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? `1px solid #2C36F2` : `1px solid #1F1E25`,
      borderBottom: state.selectProps.menuIsOpen ? `1px solid #2C36F2` : `1px solid #1F1E25`,
      borderTopLeftRadius: `4px`,
      borderTopRightRadius: `4px`,
      borderBottomLeftRadius: state.selectProps.menuIsOpen ? `0` : `4px`,
      borderBottomRightRadius: state.selectProps.menuIsOpen ? `0` : `4px`,
      cursor: `pointer`,
    }),
    valueContainer: (provided) => ({
      ...provided,
      color: `#1F1E25`,
      padding: ``,
    }),
    option: (provided, state) => ({
      ...provided,
      color: `#1F1E25`,
      backgroundColor: `#FFFFFF`,
      padding: ``,
      borderBottom: `1px solid #C1C2CA`,
      fontWeight: state.isSelected ? `500` : `400`,
    }),
    menu: (provided) => ({
      ...provided,
      boxShadow: `none`,
      margin: `0`,
      position: `static`,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: `0`,
      border: `1px solid #1F1E25`,
      borderTopLeftRadius: `0`,
      borderTopRightRadius: `0`,
      borderBottomLeftRadius: `4px`,
      borderBottomRightRadius: `4px`,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,

      padding: ``,
      transform: state.selectProps.menuIsOpen ? `rotate(180deg)` : ``,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: `none`,
    }),
  };

  const handleSelectChange = (inputValue, {action}) => {
    switch (action) {
      case `select-option`:
        setValue(inputValue);
        onSelectChange(inputValue.value);
        setIsSelectMenuOpen(false);
        break;

      default: {
        return
      }
    }
  };

  const handleKeyDown = (evt) => {
    const index = cases.indexOf(value.value);

    switch (evt.key) {
      case `ArrowDown`:
        if (isSelectMenuOpen && index < cases.length - 1) {
          setValue({
            value: cases[index + 1],
            label: cases[index + 1],
          });
        }
        break;

      case `ArrowUp`:
        if (isSelectMenuOpen && index > 0) {
          setValue({
            value: cases[index - 1],
            label: cases[index - 1],
          });
        }
        break;

      case `Enter`:
        if (isSelectMenuOpen) {
          evt.preventDefault();
          handleSelectChange(value, {action: `select-option`});
        }
        break;

      case `Tab`:
        if (isSelectMenuOpen) {
          evt.preventDefault();
        }
        break;

      case ` `:
        setIsSelectMenuOpen(true);
        break;

      case `Escape`:
        setIsSelectMenuOpen(false);
        break;

      default: {
        return
      }
    }
  };

  const handleOnSelectClick = (evt) => {
    if (!evt.target.closest(`.purpose-select__menu`)) {
      if (evt.target.closest(`.purpose-select__value-container`)) {
        setIsSelectMenuOpen(true);
      }

      if (evt.target.closest(`.purpose-select__indicators`)) {
        !isSelectMenuOpen ? setIsSelectMenuOpen(true) : setIsSelectMenuOpen(false);
      }
    }
  }

  return (
    <div onClick={(evt) => handleOnSelectClick(evt)} onTouchStart={(evt) => handleOnSelectClick(evt)} >
      <Select className="purpose-select" classNamePrefix="purpose-select" components={{DropdownIndicator}}
        styles={customStyles} options={options} placeholder={``} value={value} menuIsOpen={isSelectMenuOpen}
        isSearchable={false} onChange={handleSelectChange} onKeyDown={handleKeyDown}
        onBlur={() => setIsSelectMenuOpen(false)} />
    </div>
  );
};

PurposeSelect.propTypes = {
  purpose: PropTypes.string,
  onSelectChange: PropTypes.func.isRequired,
};

export default PurposeSelect;
