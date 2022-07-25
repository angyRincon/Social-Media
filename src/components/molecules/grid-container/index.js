//@packages
import React from 'react';

//@styles
import classes from './style.module.scss';

const GridContainer = ({children}) => {
    return (
        <div className={classes.gridContainer}>
            {children}
        </div>
    );
};

export default GridContainer;