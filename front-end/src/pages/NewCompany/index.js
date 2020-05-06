import React from 'react';

import './styles.css';

import hstLogo from '../../assets/logoHST.png';

export default function NewCompany(){
    return(
    
    <div className="newRegister-container">
        <div className="content">
            <img src={hstLogo} alt="HST Card Technology" />
            <section className="form">
                <form action="">
                    <strong>Informações Básicas</strong>
                    <div className="basicInfo">
                        <div className="input-group">
                            <input type="text" id="userName" placeholder="Empresa"/>
                            <input id ="codigo" placeholder="Código" style={ { width: 90 } }/>
                            </div>
                            <input type="text" id="userName" placeholder="Telefone"/>
                            <select name="company-select" id="company-select">
                                <option value="empresa1">Empresa 1</option>
                                <option value="empresa2">Empresa 2</option>
                                <option value="empresa3">Empresa 3</option>
                                <option value="empresa4">Empresa 4</option>
                            </select>
                        </div>    
                        <button className="button" type="submit">Cadastrar</button>
                </form>
            </section>     
        </div>
    </div>
    );
}