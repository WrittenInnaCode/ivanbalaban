import React from 'react';
import ivanPhoto from '../assets/Ivan.jpg';

const About = () => {
    return (
        <div id="about">

            <div id="ivan-header">
                <h1>Ivan Balaban</h1>
            </div>

            <div id="about-ivan">
                <div id="ivan-information">
                    <p id="personal-stylist">Your personal hairstylist</p>
                    <p id="phone-number">(818) 674-3491</p>
                    <p id="about-paragraph">Here you will write a little bit about yourself.</p>
                </div>

                <div id="ivan-photo-box">
                    <img className="ivan-photo"
                        src={ivanPhoto}
                        alt="Ivan Balaban, Professional Hairdresser" />
                </div>
            </div>

        </div>
    );
};

export default About;