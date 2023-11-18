import React from "react";
import "./stores.scss";

const Stores = () => {
    const screenSizeHeight = window.screen.height;
    const screenSizeWidth = window.screen.width;
  return (
    <div className="stores">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0074992888913!2d77.56299407600197!3d12.907239116284218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b1d3b5bc97%3A0x201eccba58e7911b!2sDayananda%20Sagar%20University!5e0!3m2!1sen!2sin!4v1700325730808!5m2!1sen!2sin"
        width={screenSizeWidth}
        height={screenSizeHeight}
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Stores;
