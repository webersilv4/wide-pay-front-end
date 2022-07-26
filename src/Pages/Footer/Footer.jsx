import React from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { BsEmojiHeartEyesFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-light py-3" style={{ 'marginTop': '30%' }}>
                <div className="container">
                    <b className="text-muted">Feito com muito <AiFillHeart className="text-danger" /> por <a href="http://weber.vercel.app" target="_blank" rel="noopener noreferrer">Weber Costa</a> para wide pay <BsEmojiHeartEyesFill className="text-danger" />.</b>
                </div>
            </footer>
        </>
    );
};


export default Footer;