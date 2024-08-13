import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
// import './index.css';
import { Notifications } from '../Notifications/Notifications.js';
import  App  from '../App/App.js';
// import reportWebVitals from './reportWebVitals';

const root = document.querySelector("#root")//ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
// ReactDOM.render(
//   <React.StrictMode>
// 		<div className='root-notifications'>
// 			<Notifications />
// 		</div>
//     <App />
//   </React.StrictMode>, root
// );
ReactDOM.render(
	<div>
		{/* hello */}
		<Notifications />
		<App />
	</div>, root)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
