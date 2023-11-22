import React from 'react';
import './Home.scss'
import sofa from '../../assets/sofa.png'

const Home = () => {


    return (
        <div className="home">
            <div className="home__banner banner">
                <div className="banner__img">
                    <img src={sofa}/>
                    <div className="chars">
                        <div className="chars__title">Characteristics</div>
                        <div className="chars__text">Length x Width x Height <br/> 164cm x 105cm x 85cm</div>
                    </div>
                </div>

                <div className="banner__body">
                    <div className="banner__title">Livery Mini</div>
                    <div className="banner__text">The Lieri Mini sofa is a compact version of the popular Scandinavian–style Lieri model. Narrow armrests, voluminous pillows and elegant legs of unusual shape make it a bright accent in any interior. Due to its size, the sofa is easy to place in a limited space, for example, in the kitchen, in a studio apartment or on the balcony.</div>
                    <div className="banner__price">15,000$</div>
                    <button className="banner__buy">Buy now</button>
                </div>
            </div>

            <div className="home__ar ar">
                <div className="ar__title">View in AR</div>
                <div className="ar__text">Before buying, check it out thanks to our reality system</div>
                <div className="ar__play">
                    <iframe title="Sofa" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking"
                            xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="https://sketchfab.com/models/313153cc18b241289ff76f02aed6e0f2/embed?autostart=1"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Home;