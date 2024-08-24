import React from 'react';

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
