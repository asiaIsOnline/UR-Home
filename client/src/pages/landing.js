import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import landingStyles from '../css_modules/Landing.module.css';

const Landing = () => {
    return (
        <div>
            <header>
                <div className={`${landingStyles.landingbanner}`}></div>
                <div className={`${landingStyles.landingbannercontent}`}>
                    <h1>Send Some Magic</h1>
                    <h2 className='font-light'>Show a loved one you care today!</h2>
                    <button className={`landing-button light-text-button`}>Shop Now</button>
                </div>
            </header>
            <FontAwesomeIcon icon={faCircleQuestion} className={`${landingStyles.helpicon}`} size="2xl"/>
            <section className={`${landingStyles.floweroptions}`}>
                <div className={`${landingStyles.floweroptionscontainer}`}>
                    <div className={`${landingStyles.floweroptionsdisplayimg1}`}></div>
                    <div className={`${landingStyles.floweroptionsillustration}`}></div>
                    <div className={landingStyles.floweroptionstext}>
                        <h1>Enchanting Options</h1>
                        <h3>The Moon Magic Florists offer a wide array of options.</h3>
                        <button className={`landing-button dark-text-button`}>All Flowers</button>
                    </div>
                </div>
                <div className={`${landingStyles.floweroptionsbanner}`}></div>
                <div className={`${landingStyles.floweroptionsgallery}`}>
                    <div className={`${landingStyles.floweroptionsgalleryimg} ${landingStyles.floweroptionsgalleryimg1}`}></div>
                    <div className={`${landingStyles.floweroptionsgalleryimg} ${landingStyles.floweroptionsgalleryimg2}`}></div>
                    <div className={`${landingStyles.floweroptionsgalleryimg} ${landingStyles.floweroptionsgalleryimg3}`}></div>
                </div>
            </section>
            <section className={landingStyles.baskets}>
                <div className={landingStyles.basketscontent}>
                    <div className={landingStyles.basketsillustration}></div>
                    <h1>Spellbinding <br/> Baskets</h1>
                    <h3>Flowers, and sweets, and wine, <br/> oh my!</h3>
                    <button button className={`landing-button light-text-button`}>Shop Gift Baskets</button>
                </div>
                <div className={landingStyles.basketsimg}></div>
            </section>
            <section className={landingStyles.treats}>
                <div className={landingStyles.treatsimg}></div>
                <div className={landingStyles.treatscontent}>
                    <h1>Charming Treats</h1>
                    <h3>Moon Magic Florist offers <br/> subscription services as well!</h3>
                    <button button className={`landing-button dark-text-button`}>Learn More</button>
                </div>
            </section>
        </div>
    )
}

export default Landing;