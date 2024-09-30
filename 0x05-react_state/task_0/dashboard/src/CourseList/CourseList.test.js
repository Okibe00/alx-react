import React from 'react';
import CourseList from './CourseList';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';


describe('Test the CourseList component', () => {

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })
  test("Renders without crashing", () => {
    render(<CourseList/>)
  })

  test('Renders 5 rows', () => {
    const { container } = render(<CourseList />)
    const text = container.querySelector('th')
    expect(text).toBeTruthy()
  })

})
