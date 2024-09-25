import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('test CourseList row', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })
  test('test render without crashing', () => {
    render(
      <table>
        <tbody>
        <CourseListRow
          isHeader={true}
          textFirstCell={'I am the first text'}
          textSecondCell={'I am the second text'}
        />
        </tbody>
      </table>
    );
  })

  test('two table header when isHeader is true and textFirstCell is null', () => {
    const { container } = render(
      <table>
        <tbody>
        <CourseListRow
          isHeader={true}
          textFirstCell={'I am the firstText'}
          textSecondCell={null}
         />
        </tbody>
      </table>
      );
    const tableRow = container.querySelector('th[colspan]');
    expect(tableRow).toBeInTheDocument();
  })

  test('Test component renders two td elements', () => {
    const { container } = render(
      <table>
        <tbody>
        <CourseListRow
          isHeader={false}
          textFirstCell={'I am the firstText'}
          textSecondCell={'I am the secondText'}
        />
        </tbody>
      </table>
  );
    const tableData = container.querySelectorAll('td');
    expect(tableData.length).toBe(2);
  })
})
