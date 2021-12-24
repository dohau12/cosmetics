import React from 'react';
import Dun from '../img/km1.gif';
// import Dung from '../img/dungcc.png';
import icfacebook from '../img/icfacebook.svg';
import icYoutobe from '../img/icYoutobe.svg';
import icig from '../img/icig.svg';
import './right.scss';

export default function ContentRight() {
    return (
        <div className="content-right">
            <div className="right-top">
                <img src={Dun} alt="" />
            </div>
            <div className="banner-right-link" >
              <a href="https://www.facebook.com/profile.php?id=100013370045921" > < img src={icfacebook} alt="" /> </a> <br /> < br />
              <a href="" ><img src={icYoutobe} alt="" /></a> <br /> < br />
              <a href="" ><img src={icig} alt="" /></a> </div>
        </div>
    )
}
