import React from 'react';
import './Notifications.css';
import { IoIosClose } from "react-icons/io";
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';

export function Notifications() {
	const style = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"

	}

	return (
		<div className="notify">
			<div style={style}>
			<p>Here is the list of notifications</p>
			<button
			aria-label='Close'
			onClick={console.log('Close button has been clicked')}
			// style={button}
			>
			<IoIosClose />
			<img src="#" alt="close-image" />
			</button>
			</div>
			<ul>
				{/* <li>
					<data value="default">New course available</data>
				</li> */}
        <NotificationItem
          value={"New course available"}
          // html={"<data value=default>New course available</data>"}
          type={"default"}
        />
        <NotificationItem
          value={"New resume available"}
          type={""}
        />

				{/* <li>
					<data value="">New resume available</data>
          </li> */}
          <NotificationItem
            type={"urgent"}
            value={getLatestNotification(false)}
            // html={`<data value=urgent id=urgent>${getLatestNotification(false)}</data>`}
            // html={null}
          />
				{/* <li>
					<data value="urgent" id="urgent" dangerouslySetInnerHTML={getLatestNotification(true)}></data>
				</li> */}

			</ul>
		</div>
	)
}
