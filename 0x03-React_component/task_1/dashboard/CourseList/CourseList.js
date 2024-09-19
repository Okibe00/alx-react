import React from "react";
import CourseListRow from "./CourseListRow.js";
import "./CourseList.css";
import { CourseShape } from "./CourseShape.js";
import PropTypes from "prop-types";

export default function CourseList({ listCourses }) {
  console.log(listCourses);
  return (
    <table>
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
        {/*
          <CourseListRow
            textFirstCell={'ES6'}
            textSecondCell={'60'}
            isHeader={false}
          />
          <CourseListRow
            textFirstCell={'Webpack'}
            textSecondCell={'20'}
            isHeader={false}
          />
          <CourseListRow
            textFirstCell={'React'}
            textSecondCell={'40'}
            isHeader={false}
          />*/}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};
