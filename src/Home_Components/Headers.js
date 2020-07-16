import React, { useState }from 'react';
import './Headers.scss';

import logo from '../Assets/Logowhite.png'
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  cartButton: {
      marginLeft: theme.spacing(2),
    },
  title: {
    '& div': {
      width:'80%'
   }
  },
  MuiDrawerModal:{

},
}));
export default function Headers() {
  const classes = useStyles();
  const [lang,setLang] = useState(false) ;
  const [opened,setOpened] = useState(false);
  const toggleDrawer = (open) => (event)=> {
    setOpened(open)
  };
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
      <div className="dropdown-content">
       <h4 >Personal Loans</h4>
       <h4 >Home Loans</h4>
       <h4 >Car Loans</h4>
      </div>
      </div>
      <h4>Credit Cards</h4>
      <h4>Saving Deposits</h4>
      </div>
      </div>
      <div className='menu'>
      <MenuIcon className={classes.cartButton} onClick={toggleDrawer(true)} fontSize={'large'} />
      </div>
      <Drawer className={classes.title} open={opened} onClose={toggleDrawer(false)}>
        <div
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List >
        <div className="upper-sideDrawer">
       <h4 >Personal Loans</h4>
       <h4 >Home Loans</h4>
       <h4 >Car Loans</h4>
       <h4>Credit Cards</h4>
      <h4>Saving Deposits</h4>
      </div>
        </List>
        <Divider />
        <List >
        <div className='lower-sideDrawer'>
      <p>How it Works</p>
      <p>Calculators</p>
      <p>Money Blog</p>
      <p>Help Center</p>
      <p className={lang?'arabic crusor':'english crusor'}><span className='ar'>AR</span> | <span className='en'>EN</span></p>
      </div>
        </List>

      </div>
          </Drawer>
    </div>
  );
}

