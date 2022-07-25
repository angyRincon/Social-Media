//packages
import React from 'react';

//styles
import classes from './style.module.scss';
import classNames from "classnames";

const Switch = ({checked, handleChange}) => {
    return (
        <label className={classNames(classes.switch)}>
            <input
                type="checkbox"
                checked={checked}
                value={checked}
                onChange={handleChange}
            />
            <span className={classes.slider}></span>
        </label>
    );
};

export default Switch;