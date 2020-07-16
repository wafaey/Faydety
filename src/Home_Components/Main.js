import React, { useState } from 'react';
import './Main.scss';

import LoanChange from './Main_Components/LoanChange'
import LoansComponent from './Main_Components/LoansComponent'
import FilterListIcon from '@material-ui/icons/FilterList';

export default function Main() {
  const [tag,setTag] = useState(false);
	return (
    <div className="main">
      <div className='head'>
        <h1>Personal Loans</h1>
        <h2>Find and compare the best deals on personal loans</h2>
      </div>
       <LoanChange />
       <LoansComponent />
       <div className={!tag?'filter':'hideFilter'}>
       <div className='filterIcon'>
       <FilterListIcon  fontSize={'large'}/> 
       <h4>Filters</h4>
       </div>
       <button className="btn add-color" type="button" onClick={()=> setTag(true)}>Change</button>
       </div>
       <div className={tag?'filterOnClick':'hideFilter'}>
       <LoanChange setTag={setTag}/>
       </div>
    </div>
  );
}

