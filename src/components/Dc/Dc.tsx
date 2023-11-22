import React from 'react';
import './Dc.scss'
import chair from "../../assets/chair.png";

const Dc = () => {
    return (
        <div className="dc">
            <div className="dc__banner banner">
                <div className="banner__img">
                    <img src={chair}/>
                    <div className="chars">
                        <div className="chars__title">Characteristics</div>
                        <div className="chars__text">Length x Width x Height <br/> 40cm x 65cm x 85cm</div>
                    </div>
                </div>

                <div className="banner__body">
                    <div className="banner__title">The Dragon's Chair</div>
                    <div className="banner__text">This is the chair that has a huge gap between any others. Not a single
                        one comes within the price range, and what could be a more fitting name for the apex predator of
                        chairs: The Dragon Chair. This piece of design will cost over £25 million. Eileen Gray designed
                        it over one hundred years ago, and it has been in the homes of many powerful, and influential
                        figures. <br/> It consists of leather and hand sculpted wood, and was bought by Yves Saint
                        Laurent. Hopefully he is comfy on it!
                    </div>
                    <div className="banner__price">£27.8 Million</div>
                    <button className="banner__buy">Buy now</button>
                </div>
            </div>

            <div className="dc__ar ar">
                <div className="ar__title">View in AR</div>
                <div className="ar__text">Before buying, check it out thanks to our reality system</div>
                <div className="ar__play">
                    <iframe title="Chair 7" frameBorder="0" allowFullScreen
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered
                            web-share
                            src="https://sketchfab.com/models/5f7334fcade8415d98e239039011b8ab/embed?autostart=1"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Dc;