import React from "react";
import "./Notifications.css";
import { IoIosClose } from "react-icons/io";
import { getLatestNotification } from "../utils/utils.js";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape.js";

export class Notifications extends React.Component {
  markAsRead = (id) =>
    console.log(`Notification ${id} has been marked as read`);
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (
      nextProps.listNotifications.length > this.props.listNotifications.length
    ) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div className="notif-container">
        <div className="menueItem">Your notifications</div>
        {this.props.displayDrawer && (
          <div className="notify">
            {this.props.displayDrawer && (
              <p>Here is the list of notifications</p>
            )}
            <button
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <IoIosClose />
            </button>
            <ul>
              {!this.props.listNotifications.length ? (
                <NotificationItem
                  value={"No new Notification for now"}
                  type={"default"}
                />
              ) : (
                this.props.listNotifications.map((obj) => {
                  return (
                    <NotificationItem
                      markAsRead={this.markAsRead}
                      key={obj.id}
                      value={obj.value}
                      type={obj.type}
                      html={obj.html}
                      key_id={obj.id}
                    />
                  );
                })
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
