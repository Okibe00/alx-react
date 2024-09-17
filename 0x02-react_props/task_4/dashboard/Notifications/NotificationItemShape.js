import PropTypes from "prop-types";

export const NotificationItemShape = PropTypes.shape({
  id: PropTypes.string,
  html: PropTypes.objectOf(PropTypes.string),
  type: PropTypes.string,
  value: PropTypes.string,
});
