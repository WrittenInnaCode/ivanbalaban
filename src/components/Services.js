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

                <h2 className="service-name">Haircuts </h2>
                <div className="services-group">
                    <ul className='services-items'>
                        <li>Women</li>
                        <li>Hair trim</li>
                        <li>Men</li>
                        <li>Children</li>
                    </ul>
                    <ul className='services-prices'>
                        <li>$100</li>
                        <li>$60</li>
                        <li>$50</li>
                        <li>$45</li>
                    </ul>
                </div>

                <h2 className="service-name">Hair Color</h2>
                <div className="services-group">
                    <ul className='services-items'>
                        <li>Full Color</li>
                        <li>Root Bleaching</li>
                        <li>Partial Highlights</li>
                        <li>Full Highlights</li>
                        <li>Balayage / Shatush / Airtouch</li>
                        <li>Toner</li>
                    </ul>
                    <ul className='services-prices'>
                        <li>$190</li>
                        <li>$200</li>
                        <li>$150</li>
                        <li>$200</li>
                        <li>$200</li>
                        <li>$50</li>
                    </ul>
                </div>

                <h2 className="service-name">Hair Styling</h2>
                <div className="services-group">
                    <ul className='services-items'>
                        <li>Blowdry</li>
                        <li>Hair styling</li>
                    </ul>
                    <ul className='services-prices'>
                        <li>$50</li>
                        <li>$15</li>
                    </ul>
                </div>

                <h2 className="service-name">Hair Treatments</h2>
                <div className="services-group">
                    <ul className='services-items'>
                        <li>Keratin Treatment / Brazilian Blow out</li>
                        <li>Bio-curling / Perm</li>
                        <li>Hair Repair Treatments</li>
                    </ul>
                    <ul className='services-prices'>
                        <li>$200-$350</li>
                        <li>$200</li>
                        <li>$150</li>
                    </ul>
                </div>

                <h2 className="service-name">Face</h2>
                <div className="services-group">
                    <ul className='services-items'>
                        <div>Beard Grooming / Trim</div>
                        <div>Facial Waxing</div>
                        <div>Neck Waxing</div>
                    </ul>
                    <ul className='services-prices'>
                        <li>$20</li>
                        <li>$20 per area</li>
                        <li>$30</li>
                    </ul>

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