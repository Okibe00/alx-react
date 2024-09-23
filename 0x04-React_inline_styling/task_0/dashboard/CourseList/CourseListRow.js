import React from "react";
import PropTypes from "prop-types";
const backgroundTh = {
  backgroundCcolor: '#f5f5f5ab',
}
const backgroundTr = {
  backgroundCcolor: '#deb5b545',
}

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  if (isHeader) {
    if (textSecondCell) {
      return (
        <tr style={backgroundTh}>
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
      <tr style={{backgroundTr}}>
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
