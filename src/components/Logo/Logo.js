import React from 'react';
import Burgerlogo from '../../assets/Images/original.png';

import classes from '../Logo/Logo.css'


const logo=(props)=>(
    <div   className={classes.Logo} style={{height: props.height}}>
        <img src={Burgerlogo} alt="MyBurger" />        
    </div>
);

export default logo;