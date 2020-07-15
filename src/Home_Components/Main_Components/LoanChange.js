import React from 'react';

import './LoanChange.scss';

export default function LoanChange() {
	return (
<div className='loan-info'>
<div className='loan'>
<div class="dropdown">
<label for="usr">Loan amount</label>
<input type="text" class="form-control add" id="usr" value='e.g. 100,000'></input>
</div>
<div class="dropdown">
<label for="usr">Loan Duration</label>
<button class="btn dropdown-toggle add" type="button" data-toggle="dropdown">Select Employment Type
<span class="caret"></span></button>
<ul class="dropdown-menu">
<li><p>Full</p></li>
<li><p>Part</p></li>
</ul>
</div>
<div class="dropdown">
<label for="usr">Employment Type</label>
<button class="btn dropdown-toggle add" type="button" data-toggle="dropdown">Select Employment Type
<span class="caret"></span></button>
<ul class="dropdown-menu">
<li><p>Full</p></li>
<li><p>Part</p></li>
</ul>
</div>
<div class="dropdown">
<label for="usr">Salary Transfer Ability</label>
<button class="btn dropdown-toggle add" type="button" data-toggle="dropdown">Select Transfer Ability
<span class="caret"></span></button>
<ul class="dropdown-menu">
<li><p>Full</p></li>
<li><p>Part</p></li>
</ul>
</div>
<div class="dropdown lower">
<button class="btn add-color" type="button" >Change</button>
</div>
</div>
</div>
    )
    }