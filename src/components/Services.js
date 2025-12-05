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
                    <th colspan="2" className="service-header1">Haircuts</th>
                    <tr>
                        <td>Women</td>
                        <td className='price'>$100</td>
                    </tr>
                    <tr>
                        <td>Hair trim</td>
                        <td className='price'>$60</td>
                    </tr>
                    <tr>
                        <td>Men</td>
                        <td className='price'>$45</td>
                    </tr>
                    <tr>
                        <td>Children</td>
                        <td className='price'>$45</td>
                    </tr>

                    <th colspan="2" className="service-header">Hair Color</th>
                    <tr>
                        <td>Full Color</td>
                        <td className='price'>$190</td>
                    </tr>
                    <tr>
                        <td>Root Bleaching</td>
                        <td className='price'>$200</td>
                    </tr>
                    <tr>
                        <td>Partial Highlights</td>
                        <td className='price'>$150</td>
                    </tr>
                    <tr>
                        <td>Full Highlights</td>
                        <td className='price'>$200</td>
                    </tr>
                    <tr>
                        <td>Balayage / Shatush / Airtouch</td>
                        <td className='price'>$200</td>
                    </tr>
                    <tr>
                        <td>Toner</td>
                        <td className='price'>$50</td>
                    </tr>

                    <th colspan="2" className="service-header">Hair Styling</th>
                    <tr>
                        <td>Blowdry</td>
                        <td className='price'>$50</td>
                    </tr>
                    <tr>
                        <td>Hair styling</td>
                        <td className='price'>$15</td>
                    </tr>

                    <th colspan="2" className="service-header">Hair Treatments</th>
                    <tr>
                        <td>Keratin Treatment</td>
                        <td className='price'>$200-$350</td>
                    </tr>
                    <tr>
                        <td>Bio-curling / Perm</td>
                        <td className='price'>$200</td>
                    </tr>
                    <tr>
                        <td>Hair Repair Treatments</td>
                        <td className='price'>$150</td>
                    </tr>

                    <th colspan="2" className="service-header">Face</th>
                    <tr>
                        <td>Beard Grooming / Trim</td>
                        <td className='price'>$20</td>
                    </tr>
                    <tr>
                        <td>Facial Waxing</td>
                        <td className='price'>$20/area</td>
                    </tr>
                    <tr>
                        <td>Neck Waxing</td>
                        <td className='price'>$30</td>
                    </tr>
                </table>
            </div>

            <div id="services-photos">
                <img src={photo1} alt="services hair wash"></img>
                <img src={photo2} alt="services instruments"></img>
                <img src={photo3} alt="services hair cutting"></img>
                <img src={photo4} alt="services hair styling"></img>
            </div>
        </div>
    );
};

export default Services;