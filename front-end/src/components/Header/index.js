import React from 'react';
import Card from '../Menu/index';


import '../../global.css';
import "./styles.css";

export default function Header() {
    return (
        <header id="main-header">
            <div className="headerClass">
                <button>
                  <Card />  
                </button>
                <h1 className="commons">Commons</h1>
            </div>
        </header>
    );
}