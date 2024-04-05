import React from 'react';

const Location = () => {
    return (
        <div id="location">
            <h1>Location</h1>

            <div id="location-info">
                <iframe
                    title="salonLocation"
                    // src="https://www.google.com/maps/embed?pb="
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>

                <div>
                    <h2>Bloom Studio</h2>
                    <address>6041 Variel Ave #1005, Woodland Hills, CA 91367</address>
                    <p>Monday-Saturday 9am-5pm</p>
                    <br />
                    <h3>(818) 674-3491</h3>
                    <p>Call or text to schedule your appointment!</p>
                </div>
            </div>
        </div>
    );
};

export default Location;