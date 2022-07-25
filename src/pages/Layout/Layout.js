//@packages
import React, {useContext} from 'react';

//@components
import {ThemeContext} from "../../context/ThemeContext";
import Header from "../../components/organisms/header";

//@styles
import classes from './styles.module.scss';
import classNames from "classnames";
import CardGeneral from "../../components/organisms/card-general";
import CardCurrent from "../../components/organisms/card-current";

const Layout = () => {
    const {theme} = useContext(ThemeContext) || {}

    return (
        <div className={classNames(classes[theme], classes.container)}>
            <div className={classes.bgDivider}></div>

            <div className={classes.containerLayout}>
                <Header />
                <CardGeneral />
                <CardCurrent />
            </div>
        </div>
    );
};

export default Layout;