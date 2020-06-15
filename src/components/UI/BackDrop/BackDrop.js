import React from 'react';
import classes from './BackDrop.css'

const BackDrop=(props)=>{
    props.show ?<div className={classes.BackDrop}></div>: null
}

export default BackDrop