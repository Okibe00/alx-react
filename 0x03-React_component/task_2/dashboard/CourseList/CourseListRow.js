import React from "react";
import PropTypes from "prop-types";
export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  if (isHeader) {
    if (textSecondCell) {
      return (
        <tr>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

//Proptypes

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isHeader: PropTypes.bool,
};
