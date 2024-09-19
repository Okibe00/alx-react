import { render, screen } from '@testing-library/react';
import React from 'react';
import { Notifications } from './Notifications.js';
import {element} from 'prop-types';

describe("renders when no props is given", () => {
	test('renders with an empty notification list', () => {

		render(<Notifications listNotifications={[]} />);
	})
	
	test('renders correct number of Notifications', () => {
		const notifications = [
			{
				id: 1,
				html: {__html: ''},
				type: 'default',
				value: 'I love react',
			},
			{
				id: 2,
				html: {__html: ''},
				type: 'urgent',
				value: 'Components for everyone',
			}
		]
		const { container } = render(<Notifications listNotifications={notifications} />);
		const element = container.querySelectorAll('li')
		expect(element.length).toBe(2)
	})

	test('render no notification with empty notification array', () => {

		render(<Notifications listNotifications={[]}/>);
		const element = screen.getByText('No new Notification for now')
		expect(element).toBeTruthy();
	})
	test('render "Here is a list of notifications"', () => {
		const notifications = [
			{
				id: 1,
				html: {__html: ''},
				type: 'default',
				value: 'I love react',
			},
			{
				id: 2,
				html: {__html: ''},
				type: 'urgent',
				value: 'Components for everyone',
			}
		]

		render(<Notifications listNotifications={notifications}/>);
		const element = screen.getByText('Here is the list of notifications')
		expect(element).toBeTruthy();
	})

})
