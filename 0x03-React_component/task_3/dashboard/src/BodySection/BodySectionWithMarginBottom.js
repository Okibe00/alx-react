import React from "react";
import "./BodySectionWithMarginBottom.css";
import PropTypes from "prop-types";
export default function BodySectionWithMarginBottom(props) {
  return (
    <div className="BodySectionWithMargin">
      <BodySection {...props}>{props.children}</BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.PropTypes = {
  props: PropTypes.object,
};
