import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Apps from './Apps';

const root = document.getElementById('root');

ReactDOM.render(
  <>
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  </>,
  root
);
