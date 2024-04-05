import React from 'react';
import photo1 from '../assets/DSC_8341.jpg';
import photo2 from '../assets/DSC_8270.jpg';
import photo3 from '../assets/DSC_8523-1.jpg';
import photo4 from '../assets/DSC_8560.jpg';


const Services = () => {
    return (
        <div id="services">
            <h1>Services</h1>

            <div id="services-list">

                <h2 className="services-group">Haircuts </h2>
                <div className='services-items'><div>Women / Men / Children</div></div>

                <h2 className="services-group">Hair Color</h2>
                <div className='services-items'>
                    <div>Full Color</div>
                    <div>Root Touch Up</div>
                    <div>Color Correction</div>
                    <div>Highlights</div>
                    <div>Balayage</div>
                </div>

                <h2 className="services-group">Hair Styling / Blowdry</h2>
                <div className='services-items'><div>Hair Wash / Shampoo</div></div>

                <h2 className="services-group">Hair Treatments</h2>
                <div className='services-items'>
                    <div>Keratin Treatment / Brazilian Blow out</div>
                    <div>Bio-curling / Perm</div>
                    <div>Hair Repair Treatments</div>
                </div>

                <h2 className="services-group">Face</h2>
                <div className='services-items'>
                    <div>Beard Grooming / Trim</div>
                    <div>Razor Shave</div>
                    <div>Facial Waxing</div>
                </div>

            </div>

            <div id="services-photos">
                <img src={photo1} alt="services photo"></img>
                <img src={photo2} alt="services photo"></img>
                <img src={photo3} alt="services photo"></img>
                <img src={photo4} alt="services photo"></img>
            </div>
        </div>
    );
};

export default Services;