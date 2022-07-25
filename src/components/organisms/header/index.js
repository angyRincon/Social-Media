//@packages
import React, {useContext} from 'react';

//@components
import Typography from "../../atoms/typography";
import SwitchLabel from "../../molecules/switch-label";
import {ThemeContext} from "../../../context/ThemeContext";

//@styles
import classes from './style.module.scss';

const Header = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={classes.headerContainer}>
            <div>
                <Typography
                    label='Social Media Dashboard'
                    variant='h3'
                    color="primary"
                    weight='bold'
                />

                <Typography
                    label='Total Followers: 23,004'
                    variant='body2'
                    color="secondary"
                    weight='bold'
                />
            </div>

            <SwitchLabel
                label={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            />
        </div>
    );
};

export default Header;