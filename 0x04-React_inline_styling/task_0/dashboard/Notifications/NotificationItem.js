import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from 'aphrodite';

const style = StyleSheet.create({
  urgent: {color: 'red'},
  default: {color: 'darkblue'}
})
const NotificationItem = React.memo(({type, value, html, markAsRead, key_id}) => {
  const display = html ? { __html: html } : { __html: `<data>${value}</data>` };
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={display}
      onClick={() => markAsRead(key_id)}
      className={type === 'urgent' ? css(style.urgent): type === 'default' ? css(style.default): ''}
    ></li>
  );
});

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
};
export default NotificationItem;
