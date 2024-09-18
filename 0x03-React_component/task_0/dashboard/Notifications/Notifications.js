import React from "react";
import "./Notifications.css";
import { IoIosClose } from "react-icons/io";
import { getLatestNotification } from "../utils/utils.js";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape.js";

export function Notifications({ displayDrawer, listNotifications }) {
  const toggle = displayDrawer ? "notify showDrower" : "notify hideDrawer";
  const isEmpty = listNotifications.length;
  return (
    <div className="notif-container">
      <div className="menueItem">Your notifications</div>
      <div className={toggle}>
        {isEmpty && <p>Here is the list of notifications</p>}
        <button
          aria-label="Close"
          onClick={console.log("Close button has been clicked")}
        >
          <IoIosClose />
        </button>
        <ul>
          {!isEmpty ? (
            <NotificationItem
              value={"No new Notification for now"}
              type={"default"}
            />
          ) : (
            listNotifications.map((obj) => {
              return (
                <NotificationItem
                  key={obj.id}
                  value={obj.value}
                  type={obj.type}
                  html={obj.html}
                />
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
