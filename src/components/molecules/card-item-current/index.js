//@packages
import React from 'react';

//@components
import Typography from "../../atoms/typography";

//@scripts
import {calculateFollowers, getRatingIcon, getSocialIcon} from "../../../utils/socialMedia";

//@styles
import classes from './style.module.scss'


const CardItemCurrent = (
    {
        title,
        socialMedia,
        followers,
        ratingUp,
        todayData
    }) => {

    return (
        <div className={classes.cardContainer}>
            <div className={classes.section}>
                <Typography
                    variant='body1'
                    color='secondary'
                    weight='bold'
                    label={title}
                />

                {getSocialIcon(socialMedia)}

            </div>

            <div className={classes.section}>
                <Typography
                    variant='h2'
                    color='primary'
                    weight='bold'
                    label={calculateFollowers(followers)}
                />
                <div className={classes.rating}>
                    {getRatingIcon(ratingUp)}
                    <Typography
                        variant='body2'
                        label={`${todayData}%`}
                        color={ratingUp ? 'green' : 'red'}
                        weight='bold'
                    />
                </div>
            </div>
        </div>
    );
};

export default CardItemCurrent;