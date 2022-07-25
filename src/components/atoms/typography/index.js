//@packages
import React from 'react';

//@styles
import classes from './style.module.scss';
import classNames from "classnames";

const variants = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body1: 'p',
    body2: 'span',
}

const Typography = ({ variant, color, weight='light', label, className }) => {

    const Component = variant ? variants[variant] : "p";

    return (
        <Component className={classNames(classes[variant], classes[color], classes[weight], className)}>
            {label}
        </Component>
    );
};

export default Typography;