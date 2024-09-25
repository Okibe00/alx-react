import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';
import '@testing-library/react';

	test("getFullYear()", () =>{
		expect(getFullYear()).toBe(2024);
	});

	test('getFooter(true)', () => {
		expect(getFooterCopy(true)).toMatch(`Holberton School`);
	});

	test('getFooter(false)', () => {
		expect(getFooterCopy(false)).toMatch(`Holberton School main dashboard`);
	})

	test('getLatestNotification()', () => {
		expect(getLatestNotification(false)).toMatch(`<strong>Urgent requirement</strong> - complete by EOD`);
	});
