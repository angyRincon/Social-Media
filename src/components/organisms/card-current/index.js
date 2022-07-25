//@packages
import React from 'react';

//@components
import GridContainer from "../../molecules/grid-container";
import CardItemCurrent from "../../molecules/card-item-current";

//@scripts
import {socialMediaCurrent} from "../../../config/master-data/social-media-current";
import Typography from "../../atoms/typography";

//@styles
import classes from './style.module.scss';

const CardCurrent = () => {
    return (
        <>
            <Typography
                label='Overview - Today'
                color='secondary'
                weight='bold'
                variant='h3'
                className={classes.title}
            />

            <GridContainer>
                {socialMediaCurrent.map(social => (
                    <CardItemCurrent
                        title={social.title}
                        socialMedia={social.socialMedia}
                        followers={social.rating}
                        ratingUp={social.ratingUp}
                        todayData={social.todayData}

                    />
                ))}
            </GridContainer>
        </>
    );
};

export default CardCurrent;