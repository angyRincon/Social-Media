//@packages
import React from "react";

//@icons
import FacebookIcon from "../components/svg/facebookIcon";
import TwitterIcon from "../components/svg/twitterIcon";
import InstagramIcon from "../components/svg/instagramIcon";
import YoutubeIcon from "../components/svg/youtubeIcon";
import UpIcon from "../components/svg/upIcon";
import DownIcon from "../components/svg/downIcon";

export const getSocialIcon = (media) => {
    switch (media) {
        case 'facebook':
            return <FacebookIcon/>;
        case 'twitter':
            return <TwitterIcon/>;
        case 'instagram':
            return <InstagramIcon/>;
        case 'youtube':
            return <YoutubeIcon/>;
        default:
            return <div>icon</div>;
    }
}

export const getRatingIcon = (isUp) => isUp ? <UpIcon/> : <DownIcon/>

export const calculateFollowers = (value) => value.toString().replace('000', 'k')