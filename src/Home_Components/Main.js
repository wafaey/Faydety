import React from 'react';
import './Main.scss';

import LoanChange from './Main_Components/LoanChange'
import LoansComponent from './Main_Components/LoansComponent'
export default function Main() {
	return (
    <div className="main">
      <div className='head'>
        <h1>Personal Loans</h1>
        <h2>Find and compare the best deals on personal loans</h2>
      </div>
       <LoanChange />
       <LoansComponent />
    </div>
  );
}

