import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';

/**
 * Very App renders without throwing
 */
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText('Login to access the full dashboard');
//   expect(linkElement).toBeInTheDocument();
// });

/**
 * verify that App renders a div with the class App-header
 * verify that App renders a div with the class App-body
 * verify that App renders a div with the class App-footer
 */

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
})
