import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils.js';
import './Footer.css';

export default function Footer() {
  return (
    <div className="App-footer">
      <p className="copyright">Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  )
}
