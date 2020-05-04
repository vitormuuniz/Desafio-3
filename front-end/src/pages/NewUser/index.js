import React from 'react';

import './styles.css';
import '../../global.css';

import hstLogo from '../../assets/logoHST.png';

export default function NewUser(){
    return(
        <div className="newUser-container">
            <div className="content">
                <section>
                    <img src={hstLogo} alt="HST Card Technology" />
                </section>
                
                <form action="">
                    <div className="basicInfo">
                        <label htmlFor="userName">Usuário:</label><br/>
                        <input type="text" id="userName"/>
                        <label htmlFor="companyName">Empresa: </label>
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
            </div>
        </div>
    );
}