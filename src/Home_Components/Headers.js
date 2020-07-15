import React, { useState }from 'react';
import './Headers.scss';

import logo from '../Assets/Logowhite.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Headers() {
  const [lang,setLang] = useState(false) ;
	return (
    <div className="headers">
      <div className='Left-side'>
      <img src={logo} alt='FaydetyLogo'></img>
      </div>
      <div className='right-side'>
      <div className='upper-side'>
      <p>How it Works</p>
      <p>Calculators</p>
      <p>Money Blog</p>
      <p>Help Center</p>
      <p className={lang?'arabic crusor':'english crusor'}><span className='ar'>AR</span> | <span className='en'>EN</span></p>
      </div>
      <div className='lower-side'>
        <div className='dropdown'>
      <h4 className='style'>Loans <span className='arrow'><ArrowDropDownIcon/></span></h4>
      <div class="dropdown-content">
       <h4 >Personal Loans</h4>
       <h4 >Home Loans</h4>
       <h4 >Car Loans</h4>
      </div>
      </div>
      <h4>Credit Cards</h4>
      <h4>Saving Deposits</h4>
      </div>
      </div>
    </div>
  );
}

