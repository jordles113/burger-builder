import React from 'react'
import classes from './BuildControls.css'

const BuildControl = (props) => {
    return (

        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less}>Less</button>
            <button 
                className={classes.More} 
                onClick={props.added}>
            More</button>
        </div>
        
    )
}

export default BuildControl
