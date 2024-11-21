import React from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
  BodySectionWithMargin: {
    marginBottom: '40px'
  }
})
export default function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(style.BodySectionWithMargin)}>
      <BodySection {...props}></BodySection>
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};
