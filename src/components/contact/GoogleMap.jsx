"use client";
const GoogleMap = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.0020114810903!2d30.144999258482226!3d36.29690104399067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c18bd658a93e2b%3A0x4992a0e0da316bdf!2sCumba%20Cafe%20%26%20Restaurant!5e0!3m2!1str!2str!4v1741438911236!5m2!1str!2str"
          style={{ border: 0, width: "100%", height: "500px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
