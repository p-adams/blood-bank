import React from 'react';
import ReactDOM from 'react-dom';
import BloodBankApp from './BloodBankApp';
import './index.css';

const DONOR = [
  {firstname: "John", lastname: "Smith", contact: 7777777, type: 'O', rh: 'Positive'}
]

ReactDOM.render(
  <BloodBankApp donor={DONOR}/>,
  document.getElementById('root')
);
