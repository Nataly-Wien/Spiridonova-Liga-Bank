import PropTypes from 'prop-types';

const reviewType = PropTypes.shape({
  name: PropTypes.string,
  plus: PropTypes.string,
  minus: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.string,
  dateTime: PropTypes.string,
}).isRequired;

const cardType = PropTypes.shape({
  name: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  priceDiscount: PropTypes.string,
  priceFull: PropTypes.string,
  credit: PropTypes.string,
  fullFeatures: PropTypes.arrayOf(PropTypes.shape({
    feature: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired,
});

export {cardType, reviewType};
