//@packages
import React from 'react';

//@components
import Typography from "../../atoms/typography";

//@scripts
import {calculateFollowers, getRatingIcon, getSocialIcon} from "../../../utils/socialMedia";

//@styles
import classNames from "classnames";
import classes from "./style.module.scss";


const CardItemGeneral = (
    {
        socialMedia,
        userName,
        followers,
        ratingUp,
        todayData
    }) => {
    return (
        <div className={classNames(classes.cardItemContainer, classes[`${socialMedia}Bar`])}>
            <div className={classes.cardHeader}>
                {getSocialIcon(socialMedia)}
                <Typography
                    variant='body2'
                    label={userName}
                    color='secondary'
                    weight='bold'
                />
            </div>

            <div className={classes.cardBody}>
                <Typography
                    variant='h1'
                    label={calculateFollowers(followers)}
                    color='primary'
                    weight='bold'
                />
                <Typography
                    variant='body2'
                    label={socialMedia !== 'youtube' ? 'followers' : 'subscribers'}
                    color='secondary'
                />
            </div>

            <div className={classes.cardFooter}>
                {getRatingIcon(ratingUp)}
                <Typography
                    variant='body2'
                    label={`${todayData} Today`}
                    color={ratingUp ? 'green' : 'red'}
                    weight='bold'
                />
            </div>
        </div>
    );
};

export default CardItemGeneral;