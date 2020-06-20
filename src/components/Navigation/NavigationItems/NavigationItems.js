import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationitems=(props)=>(
    <ul className={classes.NavigationItems}>
       <NavigationItem link ="/" active>Buger Builder</NavigationItem>
       <NavigationItem link ="/" >Checkout</NavigationItem>
    </ul>
);

export default navigationitems;