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

                <table className="services-table">
                    <th colspan="2" className="service-header">Haircuts</th>
                    <tr>
                        <td>Women</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Hair trim</td>
                        <td>$60</td>
                    </tr>
                    <tr>
                        <td>Men</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>Children</td>
                        <td>$45</td>
                    </tr>

                    <th colspan="2" className="service-header">Hair Color</th>
                    <tr>
                        <td>Full Color</td>
                        <td>$190</td>
                    </tr>
                    <tr>
                        <td>Root Bleaching</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Partial Highlights</td>
                        <td>$150</td>
                    </tr>
                    <tr>
                        <td>Full Highlights</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Balayage / Shatush / Airtouch</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Toner</td>
                        <td>$50</td>
                    </tr>

                    <th colspan="2" className="service-header">Hair Styling</th>
                    <tr>
                        <td>Blowdry</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>Hair styling</td>
                        <td>$15</td>
                    </tr>

                    <th colspan="2" className="service-header">Hair Treatments</th>
                    <tr>
                        <td>Keratin Treatment / Brazilian Blow out</td>
                        <td>$200-$350</td>
                    </tr>
                    <tr>
                        <td>Bio-curling / Perm</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>Hair Repair Treatments</td>
                        <td>$150</td>
                    </tr>

                    <th colspan="2" className="service-header">Face</th>
                    <tr>
                        <td>Beard Grooming / Trim</td>
                        <td>$20</td>
                    </tr>
                    <tr>
                        <td>Facial Waxing</td>
                        <td>$20 per area</td>
                    </tr>
                    <tr>
                        <td>Neck Waxing</td>
                        <td>$30</td>
                    </tr>
                </table>
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