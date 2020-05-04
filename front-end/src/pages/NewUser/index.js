import React from 'react';

import './styles.css';


import hstLogo from '../../assets/logoHST.png';

export default function NewUser(){
    return(
        <div className="newUser-container">
            <div className="content">
                <img src={hstLogo} alt="HST Card Technology" />
                
                <section className="form">
                        <form action="">
                            <div className="basicInfo">
                                <label htmlFor="userName">Usuário:</label><br/>
                                <input type="text" id="userName"/><br/>
                                <label htmlFor="companyName">Empresa: </label><br/>
                                <select name="companyName" id="companyName">
                                    <option value="empresa1">Empresa 1</option>
                                    <option value="empresa2">Empresa 2</option>
                                    <option value="empresa3">Empresa 3</option>
                                    <option value="empresa4">Empresa 4</option>
                                </select>
                            </div>

                            <div className="password">
                            <label htmlFor="newPassword">Nova Senha</label>
                                <input type="text" id="newPassword"/>
                                <label htmlFor="confirmPassword">Confirmar Senha</label>
                                <input type="text" id="confirmPassword"/>
                            </div>

                            <button className="button" type="submit">Cadastrar</button>
                    </form>
                </section>    
            </div>
        </div>
    );
}