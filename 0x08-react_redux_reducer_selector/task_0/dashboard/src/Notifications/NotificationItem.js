import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, css} from 'aphrodite';

const style = StyleSheet.create({
  urgent: {color: 'red'},
  default: {color: 'darkblue'}
})
const NotificationItem = React.memo(({type = 'default', value, html, markNotificationAsRead, key_id}) => {
  const display = html ? { __html: html } : { __html: `<data>${value}</data>` };
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={display}
      onClick={() => markNotificationAsRead(key_id)}
      className={type === 'urgent' ? css(style.urgent): type === 'default' ? css(style.default): ''}
    ></li>
  );
});

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markNotificationAsRead: PropTypes.func,
};

// NotificationItem.defaultProps = {
//   type: "default",
// };
export default NotificationItem;
