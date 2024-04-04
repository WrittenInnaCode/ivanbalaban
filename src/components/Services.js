import React from 'react';
import photo1 from '../assets/DSC_8270.jpg';
import photo2 from '../assets/DSC_8467.jpg';
import photo3 from '../assets/DSC_8523.jpg';
import photo4 from '../assets/DSC_8560.jpg';
import photo5 from '../assets/DSC_8341.jpg';

const Services = () => {
    return (
        <div id="services">
            <div>
                <h1>Services</h1>
                <ul>
                    <div id="services-list">Haircuts </div>
                    <ul>women, men, children</ul>

                    <div id="services-list">Hair Styling / Blowdry</div>

                    <div id="services-list">Hair Color</div>
                    <ul>
                        <div>All Over Color</div>
                        <div>Root Touch Up</div>
                        <div>Color Correction</div>
                        <div>Balayage</div>
                        <div>Shatush</div>
                        <div>Airtouch</div>
                    </ul>

                    <div id="services-list">Hair Treatments</div>
                    <ul>
                        <div>Keratin Treatment / Brazilian Blow out</div>
                        <div>Bio-curling / Perm</div>
                        <div>Hair Repair Treatments</div>
                    </ul>

                    <div id="services-list">Face</div>
                    <ul>
                        <div>Beard Correction / Trim</div>
                        <div>Facial Waxing</div>
                    </ul>
                </ul>
            </div>

            <div id="services-photos">
                <img src={photo5} alt="services photo"></img>
                {/* <img src={photo2} alt="services photo"></img> */}
                <img src={photo1} alt="services photo"></img>
                <img src={photo3} alt="services photo"></img>
                <img src={photo4} alt="services photo"></img>
            </div>
        </div>
    );
};

export default Services;