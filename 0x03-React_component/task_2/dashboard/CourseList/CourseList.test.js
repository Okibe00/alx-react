import React from 'react';
import CourseList from './CourseList';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';



describe('Test the CourseList component', () => {

  test("Renders without crashing", () => {
    render(<CourseList />)
  })

  test('Renders 5 rows', () => {
    const { container } = render(<CourseList />)
    const rows = container.querySelectorAll('tr')
    expect(rows.length).toBe(5);
  })

})
