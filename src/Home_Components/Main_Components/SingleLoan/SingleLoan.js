import React from 'react';
import './SingleLoan.scss';

import bank from '../../../Assets/Bank.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default function SingleLoan() {
	return (
    <div className="loanMain">
    <div className="left-part">
    <img src={bank} alt='EG Bank Logo'></img>
    </div>
    <div className='middle-part'>
    <h4>EG Bank | Personal Loan</h4>
    <div className='show-data'>
    <div className='interest-rate'>
     <p>Interest Rate</p>
     <p>19.75% Decreasing</p>
    </div>
    <div className='mon-installment'>
     <p>Monthly Installmets</p>
     <p>3,030 LE</p>
    </div>
    <div className='min-salary'>
     <p>Minimum Salary</p>
     <p>6,059 LE</p>
    </div>
    </div>
      <span className='more-color'>More Details <span className=''><ArrowDropDownIcon/></span></span>
    </div>
    <div className='right-part'>
    <span className='check-color'>Check Availability</span>
    <p>OR</p>
    <div class="">
    <button class="btn apply-color" type="button" >Apply now!</button>
     </div>
    </div>
    </div>
  );
}

