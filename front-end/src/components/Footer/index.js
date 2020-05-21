import React from 'react';

import '../../global.css';
import './styles.css';

import logoImg from '../../assets/logoHST.png';

export default function Footer(){
    return(
        <div className="footer">
                <img src={logoImg} alt="HST LOGO"/>
                <p>Copyright &copy; 2020 - HST Card technology - All Rights Reserved</p>
        </div>
    );
}