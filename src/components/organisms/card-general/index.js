//@packages
import React from 'react';

//@components
import GridContainer from "../../molecules/grid-container";
import CardItemGeneral from "../../molecules/card-item-general";

//@scripts
import {socialMediaDashboardData} from "../../../config/master-data/social-media-dashboard";

const CardGeneral = () => {
    return (
        <GridContainer>
            {socialMediaDashboardData.map(social => (
                <>
                    <CardItemGeneral
                        socialMedia={social.socialMedia}
                        userName={social.userName}
                        followers={social.followers}
                        ratingUp={social.ratingUp}
                        todayData={social.currentRating}
                    />
                </>
            ))}
        </GridContainer>
    );
};

export default CardGeneral;