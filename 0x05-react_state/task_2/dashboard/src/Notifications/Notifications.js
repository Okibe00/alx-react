import React from "react";
import { IoIosClose } from "react-icons/io";
import { getLatestNotification } from "../utils/utils.js";
import NotificationItem from "./NotificationItem.js";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape.js";
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
  notify:  {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px dotted red',
    padding: '5px',
    width: '400px',
    marginTop: '6px'
  },
  button:  {
    backgroundColor: 'white',
    border: 'none',
  },
  ul:  {
    marginTop: 0,
  },
  menueItem: {
    fontSize: '20px'
  },
  showDrawer: {
    display: 'block'
  },
  hideDrawer: {
    display: 'none'
  },
  notifContainer:  {
    position: 'fixed',
    right: '0px',
    // zIndex: -1,
  },
  openContainer: {
    positon: 'relative',
    top: 0,
    marginRight: '15px',
    width: '100vw',
    height: '180vh',
    zIndex: 9999,
    background: 'white'
  }
})

export class Notifications extends React.Component {
  markAsRead = (id) =>
    console.log(`Notification ${id} has been marked as read`);
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
        this.state === nextState
        ||
        nextProps.length === this.props.listNotifications.length
      )
  }
  render() {
    return (
      <div className={css(style.notifContainer)}>
        {!this.props.displayDrawer && <div onClick={this.props.handleDisplayDrawer}>Your Notifications</div>}
        {this.props.displayDrawer && (
          <div className={css(style.notify)}>
            {this.props.displayDrawer && (
              <p>Here is the list of notifications</p>
            )}
            <button
              id='close-btn'
              aria-label="Close"
              onClick={this.props.handleHideDrawer}
              className={css(style.button)}
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  // handleDisplayDrawer: () => {},
  // handleHideDrawer: () => {},
};
