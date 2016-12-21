import React from 'react';
import ReactDOM from 'react-dom';
import BloodBankApp from './BloodBankApp';
import store from './store'
import './index.css';



const DONOR = [
  {firstname: "John", lastname: "Smith", contact: 7777777, type: 'O', rh: 'Positive'},
  {firstname: "Mary", lastname: "Smith", contact: 7777447, type: 'AB', rh: 'Negative'}
]

ReactDOM.render(
  <BloodBankApp donor={DONOR}/>,
  document.getElementById('root')
);
