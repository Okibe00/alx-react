import PropTypes from "prop-types";

export const CourseShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  credit: PropTypes.number,
});
