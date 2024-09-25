import React from "react";
import CourseListRow from "./CourseListRow.js";
import "./CourseList.css";
import { CourseShape } from "./CourseShape.js";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
table: {
  position: 'relative',
  top: '40px',
  width: '95%',
  border: '1px solid #ddd',
  borderCollapse: 'collapse',
  margin: 'auto',
  fontSize: '25px'
},

})
export default function CourseList({ listCourses=[] }) {
  return (
    <table className={css(style.table)}>
      <thead>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell={"No course available yet"}
            isHeader={true}
          />
        ) : (
          <CourseListRow
            textFirstCell={"Course name"}
            textSecondCell={"Credit"}
            isHeader={true}
          />
        )}
      </thead>
      <tbody>
        {listCourses.map((obj) => {
          return (
            <CourseListRow
              key={obj.id}
              textFirstCell={obj.name}
              textSecondCell={obj.credit}
              isHeader={false}
            />
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

// CourseList.defaultProps = {
//   listCourses: [],
// };
