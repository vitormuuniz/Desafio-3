import React from 'react';

import './styles.css';

import hstLogo from '../../assets/logoHST.png';

import {MdVisibility} from "react-icons/md" 
export default function NewUser(){
    return(
        <div className="newUser-container">
            <div className="content">
                <img src={hstLogo} alt="HST Card Technology" />
                
                <section className="form">
                        <form action="">
                            <strong>Informações básicas</strong>
                            <div className="basicInfo">
                                <input type="text" id="userName" placeholder="Usuário"/>
                                <select name="companyName-select" id="companyName-select">
                                    <option value="empresa1">Empresa 1</option>
                                    <option value="empresa2">Empresa 2</option>
                                    <option value="empresa3">Empresa 3</option>
                                    <option value="empresa4">Empresa 4</option>
                                </select>
                            </div>
                            <p>Nova Senha</p>
                           <div className="password-container">
                                <div id="password">
                                        <input type="password" placeholder="Senha" id="newPasswordInput"/>
                                        <div className="visibilityIcon"><MdVisibility /></div>
                                    </div > 
                                    <div id="confirmPassword">
                                        <input type="password" id="confirmPasswordInput" placeholder="Confirmar senha"/>
                                        <div className="visibilityIcon"><MdVisibility /></div>
                                        
                                    </div>
                           </div>

                            <button className="button" type="submit">Cadastrar</button>
                    </form>
                </section>    
            </div>
        </div>
    );
}