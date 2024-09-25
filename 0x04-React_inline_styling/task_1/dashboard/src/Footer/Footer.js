import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';

const colorPrimary = 'rgb(216, 45, 45)';
const border = `0.3rem solid ${colorPrimary}`

const style = StyleSheet.create({
  appFooter: {
    borderTop: border,
    marginTop: '100%',
    textAlign: 'center'
  },
  copyRight: ''
})

export default function Footer() {
  return (
    <div className={css(style.appFooter)}>
      <p className={css(style.copyRight)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  )
}
