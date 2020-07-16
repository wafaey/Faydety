import React, {useState} from 'react';
import './SingleLoan.scss';

import bank from '../../../Assets/Bank.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SingleLoan() {
  const [show,setShow] = useState(false);
	return (
    <div className="loanMain">
    <div className='topp'>
    <div className="left-part">
    <img src={bank} alt='EG Bank Logo'></img>
    <h4 className='showMobile'>EG Bank | Personal Loan two lines</h4>
    </div>
    <div className='middle-part'>
    <h4 className='showDesktop'>EG Bank | Personal Loan</h4>
    <div className='show-data'>
    <div className='interest-rate'>
     <p>Interest Rate</p>
     <h5>19.75% Decreasing</h5>
    </div>
    <div className='mon-installment'>
     <p>Monthly Installmets</p>
     <h5>3,030 LE</h5>
    </div>
    <div className='min-salary'>
     <p>Minimum Salary</p>
     <h5>6,059 LE</h5>
    </div>
    </div>
    </div>
    <div className=' show-des  '>
    <span className={show?'hide-more-details760':'more-details760'} onClick={()=>setShow(true)}>More Details <span className=''><ArrowDropDownIcon/></span></span>
    <span className={show?'more-details760':'hide-more-details760'} onClick={()=>setShow(false)}>Less Details <span className=''><ArrowDropDownIcon/></span></span>
    <div className='right-part'>
    <span className='check-color'>Check Availability</span>
    <p>OR</p>
    <div className="">
    <button className="btn apply-color" type="button" >Apply now!</button>
     </div>
    </div>
    </div>
 </div>
 <span className={show?'hide-more-color':'more-color'} onClick={()=>setShow(true)}>More Details <span className=''><ArrowDropDownIcon/></span></span>  
    <div className='bottomm hide-desk'>
    <span className={show?'hide-more-details760':'more-details760'} onClick={()=>setShow(true)}>More Details <span className=''><ArrowDropDownIcon/></span></span>
     <div className='right-part'>
    <span className='check-color'>Check Availability</span>
    <p>OR</p>
    <div className="">
    <button className="btn apply-color" type="button" >Apply now!</button>
     </div>
    </div>
    </div>
    <span className={show?'hide-more-details':'more-details360'} onClick={()=>setShow(true)}>More Details <span className=''><ArrowDropDownIcon/></span></span>
   <div className={show?'details':'hide-details'}>
      <h4>Fees & Costs</h4>
      <ul>
        <li>Admin Fees:2.50%</li>
        <li>Flat interest Rate</li>
        <li>Admin Fees:2.50%</li>
      </ul>
      <h4>Requirements</h4>
      <ul>
        <li>National ID</li>
        <li>HR Letter</li>
        <li>Recent Utility Bill</li>
        <li>1 Year Stamped Bank</li>
        <li>Age Range: 21</li>
      </ul>
    </div>
    <div className='table-position'>
    <div className={show?'table-details':'hide-table-details'}>
    <div className='interest-rate'>
    <h4>Fees & Costs</h4>
      <ul>
        <li>Admin Fees:2.50%</li>
        <li>Flat interest Rate</li>
        <li>Admin Fees:2.50%</li>
      </ul>
    </div>
    <div className='mon-installment'>
    <h4>Requirements</h4>
    <ul>
        <li>National ID</li>
        <li>HR Letter</li>
        <li>Recent Utility Bill</li>
        <li>1 Year Stamped Bank</li>
        <li>Age Range: 21</li>
      </ul>
    </div>
    <div className='min-salary-down'>
     <p>Third column if required</p>
    </div>
    </div>
   
    <span className={show?'more-color':'hide-more-color'} onClick={()=>setShow(false)}>Less Details <span className=''><ArrowDropDownIcon/></span></span>
    </div>
    <span className={show?'more-details760':'hide-more-details760'} onClick={()=>setShow(false)}>Less Details <span className=''><ArrowDropDownIcon/></span></span>
    <span className={show?'more-details360':'hide-more-details'} onClick={()=>setShow(false)}>Less Details <span className=''><ArrowDropDownIcon/></span></span>
    
    </div>
   
  );
}

