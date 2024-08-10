import React from 'react';
import './Notifications.css';
// import { IoIosClose } from "react-icons/io";
import { getLatestNotification } from './utils';

export function Notifications() {
	const style = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"

	}

	// const button = {
	// 	width: "100px",
	// 	height: "auto"
	// }
	return (
		<div className="notify">
			<div style={style}>
			<p>Here is the list of notifications</p>
			<button
			aria-label='Close'
			onClick={console.log('Close button has been clicked')}
			// style={button}
			>
			{/* <IoIosClose /> */}
			<img src="#" alt="close-image" />
			</button>
			</div>
			<ul>
				<li>
					<data value="default">New course available</data>
				</li>
				<li>
					<data value="">New resume available</data>
				</li>
				<li>
					<data value="urgent" id="urgent" dangerouslySetInnerHTML={getLatestNotification(true)}></data>
				</li>
			</ul>
		</div>
	)
}
