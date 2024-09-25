import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from 'aphrodite';


const style = StyleSheet.create({
  colspan2: {
    textAlign: 'center',
    backgroundTh,
    backgroundTr
  },
  th: {
    textAlign: 'left',
    borderTop: '3px solid #ddd',
    borderBottom: '3px solid #ddd'
  }
})
const backgroundTh = {
  backgroundColor: '#f5f5f5ab',
}
const backgroundTr = {
  backgroundColor: '#deb5b545',
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
          <th className={css(style.th)}>{textFirstCell}</th>
          <th className={css(style.th)}>{textSecondCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th colSpan={2} className={css(style.colspan2, style.th)}>{textFirstCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={backgroundTr}>
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
