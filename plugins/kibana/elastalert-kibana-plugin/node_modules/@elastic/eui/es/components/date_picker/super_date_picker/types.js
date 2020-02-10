import PropTypes from 'prop-types';
export var commonlyUsedRangeShape = PropTypes.shape({
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
});
export var recentlyUsedRangeShape = PropTypes.shape({
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
});
export var quickSelectPanelShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
});