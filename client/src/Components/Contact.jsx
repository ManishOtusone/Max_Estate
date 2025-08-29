import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const ContactIcons = ({ phoneNumber, whatsappNumber }) => {
    return (
        <div className="flex gap-4 items-center">
            {/* Call icon */}
            <a href={`tel:${phoneNumber}`} className="text-green-700 hover:text-green-900">
                <FaPhoneAlt size={24} />
            </a>

            {/* WhatsApp icon */}
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700"
            >
                <FaWhatsapp size={24} />
            </a>
        </div>
    );
};

export default ContactIcons;
