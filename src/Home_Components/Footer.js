import React from 'react';
import './Footer.scss';

import logo from '../Assets/Logowhite.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

export default function Footer() {
	return (
    <div className="footer">
      <div className='footer-data'>
         <div className='upper-section'>
         <img src={logo} alt='FaydetyLogo'></img>
         <div className='upper-side'>
          <p>How it Works</p>
          <p>Calculators</p>
          <p>Money Blog</p>
         <p>Help Center</p>
         </div>
         </div>
         <div className='middle-section'>
           <div className='rightt'>
         <div className='upper-side side'>
          <h4>Loans</h4>
          <p>Personal Loan</p>
          <p>Home Loan</p>
         <p>Car Loan</p>
         </div>
         <div className='upper-side side'>
         <h4>Credit Cards</h4>
          <p>Credit Cards</p>
         </div>
         <div className='upper-side side'>
         <h4>Saving Deposits</h4>
          <p>Saving Deposits</p>
         </div>
         </div>
        <div className='leftt'>
          <LinkedInIcon color={'action'} fontSize={'large'}/>
          <InstagramIcon color={'action'} fontSize={'large'}/>
          <YouTubeIcon color={'action'} fontSize={'large'}/>
          <TwitterIcon color={'action'} fontSize={'large'}/>
          <FacebookIcon color={'action'} fontSize={'large'}/>
        </div>
         </div>
         <div className='lower-section'>
          <div className='policy'>
         <p>Bank Directory</p>
         <p>Privacy policy</p>
         </div>
         <div className='help'>
         <button class="btn apply-color" type="button"> <span><ModeCommentIcon /></span> Help!</button>
         </div>
        </div>
      </div>
    </div>
  );
}

