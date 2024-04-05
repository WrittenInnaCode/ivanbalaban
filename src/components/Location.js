import React from 'react';

const Location = () => {
    return (
        <div id="location">
            <h1>Location</h1>

            <div id="location-info">

                <div>
                    <iframe
                        title="Salon Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211243.02274084624!2d-118.89834460546874!3d34.180296900000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29f92dff2cb7f%3A0xaed31ef55522a5b!2sBloom%20Studio!5e0!3m2!1sen!2sus!4v1712283834227!5m2!1sen!2sus"
                        style={{ border: 0 }}
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div id="address">
                    <h2>Bloom Studio</h2>
                    <address>6041 Variel Ave #1005, Woodland Hills, CA 91367</address>
                    <p>Monday-Saturday 9am-5pm</p>
                    <br />
                    <h3>(818) 674-3491</h3>
                    <p>Call or text to schedule your appointment!</p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Location;