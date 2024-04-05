import React from 'react';
import ivanPhoto from '../assets/Ivan.jpg';

const About = () => {
    return (
        <div id="about">

            <div id="about-flex">
                <div>
                    <div id="about-ivan">
                        <h1>Ivan Balaban</h1>
                        <p>
                            Your personal stylist
                        </p>
                        <p>Here you will write a little bit about yourself.</p>
                    </div>

                    <div id="contacts">
                        <p>
                            (818) 674-3491
                        </p>
                    </div>
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