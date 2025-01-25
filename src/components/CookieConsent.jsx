// src/components/CookieConsent.jsx
import React from 'react';
import ReactCookieConsent, { Cookies } from 'react-cookie-consent';

const CookieConsent = ({ onAccept }) => {
    return (
        <div className='px-4 sm:px-[5ve] md:px-[7vw] lg:px-[9vw]'>
            <ReactCookieConsent
                location="bottom"
                buttonText="Akzeptieren"
                declineButtonText="Ablehnen"
                enableDeclineButton
                cookieName="cookieConsent"
                onAccept={onAccept}
                onDecline={() => {
                    // Handle decline action if needed
                }}
                style={{ background: "#2f3131" }}
                buttonStyle={{ backgroundColor: "#4CAF50", color: "#fff", fontSize: "16px", padding: "10px 20px" }}
                declineButtonStyle={{ backgroundColor: "#f44336", color: "#fff", fontSize: "16px", padding: "10px 20px" }}
            >
                <div className='px-4 sm:px-[5ve] md:px-[7vw] lg:px-[9vw]'>
                    <p className='light-text2'>
                        Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Weitere Informationen finden Sie in unserer{" "}
                        <a href="/datenschutz" style={{ color: "#4CAF50", textDecoration: "underline" }}>
                            Datenschutzerklärung
                        </a>
                        .
                    </p>
                </div>
            </ReactCookieConsent>
        </div>
    );
};

export default CookieConsent;
