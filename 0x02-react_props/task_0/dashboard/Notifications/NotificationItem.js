import React from 'react';

export default function NotificationItem({ type, value, html } ) {
  const display = html ? {__html: html} : {__html : value};

  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={ display }
    >
    </li>
  )
}
