import React from 'react';
import './LoansComponent.scss';

import SingleLoan from './SingleLoan/SingleLoan'

export default function LoansComponent() {
	return (
    <div className="data">
    <SingleLoan />
    <SingleLoan />
    <SingleLoan />
    </div>
  );
}

