import React from 'react';
import './Notifications.css';
import { IoIosClose } from "react-icons/io";
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';
import PropTypes from 'prop-types';

export function Notifications({ displayDrawer }) {
  const toggle = displayDrawer ? "notify showDrower": "notify hideDrawer";
  return (
    <div className="notif-container">
      <div className="menueItem">
        Your notifications
      </div>
      <div
        className={toggle}
      >
          <p>Here is the list of notifications</p>
          <button
            aria-label='Close'
            onClick={console.log('Close button has been clicked')}
          >
            <IoIosClose />
          </button>
        <ul>
          <NotificationItem
            value={"New course available"}
            type={"default"}
          />
          <NotificationItem
            value={"New resume available"}
            type={""}
          />
          <NotificationItem
            type={"urgent"}
            value={getLatestNotification(false)}
          />
        </ul>
      </div>
    </div>
  )
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
  displayDrawer: false
}
