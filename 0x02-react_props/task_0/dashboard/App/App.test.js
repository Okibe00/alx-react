import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';

describe("test page element rendered", () => {
	test("test for App-header", () => {
		const { container } = render(<App />);
		const element = container.querySelector('.App-header');
		expect(element).toBeInTheDocument();
	});

	test("test for App-body", () => {
		const { container } = render(<App />);
		const element = container.querySelector('.App-body');
		expect(element).toBeInTheDocument();
	});

	test("test for App-footer", () => {
		const { container } = render(<App />);
		const element = container.querySelector('.App-footer');
		expect(element).toBeInTheDocument();
	});
	test("test for notification", () => {
		const { container } = render(<App />);
    // screen.debug();
		const element = container.querySelector('.notify');
		expect(element).toBeInTheDocument();
	});
})


// describe('test for children component', () => {
//   test("Footer component exist", () => {
//     const { getByTestId } = render(<App />)
//     screen.debug()
//     const footerComponent = getByTestId('footer');
//     expect(footerComponent).toBeInTheDocument();
//   })
// })
