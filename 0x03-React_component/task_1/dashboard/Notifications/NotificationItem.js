import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, value, html } ) {
  const display = html ? {__html: html} : {__html : `<data>${value}</data>`};

  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={ display }
    >

    </li>
  )
}

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({__html: PropTypes.string})
}

NotificationItem.defaultProps = {
  type: 'default'
}
