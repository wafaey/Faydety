import React from 'react';

import './LoanChange.scss';

export default function LoanChange({setTag}) {
	return (
<div className='loan-info'>
<div className='loan'>
<div className="dropdown">
<label htmlFor="usr">Loan amount</label>
<input type="text" className="form-control add" id="usr" defaultValue='e.g. 100,000'></input>
</div>
<div className="dropdown item1">
<label htmlFor="usr">Loan Duration</label>
<button className="btn dropdown-toggle add" type="button" data-toggle="dropdown">Select Employment Type
<span className="caret"></span></button>
<ul className="dropdown-menu">
<li><p>Full</p></li>
<li><p>Part</p></li>
</ul>
</div>
<div className="dropdown">
<label htmlFor="usr">Employment Type</label>
<button className="btn dropdown-toggle add" type="button" data-toggle="dropdown">Select Employment Type
<span className="caret"></span></button>
<ul className="dropdown-menu">
<li><p>Full</p></li>
<li><p>Part</p></li>
</ul>
</div>
<div className="dropdown">
<label htmlFor="usr">Salary Transfer Ability</label>
<button className="btn dropdown-toggle add" type="button" data-toggle="dropdown">Select Transfer Ability
<span className="caret"></span></button>
<ul className="dropdown-menu">
<li><p>Full</p></li>
<li><p>Part</p></li>
</ul>
</div>
<div className="dropdown lower">
<button className="btn add-color" type="button" onClick={()=> setTag(false)}>Change</button>
</div>
</div>
</div>
    )
    }