import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';

function Profile() {

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ngoId = localStorage.getItem('ngoId');
    const ngoName = localStorage.getItem('ngoName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ngoId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ngoId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ngoId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert("Erro ao remover caso. Tente novamente.");
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ngoName}</span>
            
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => {
                    return (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>
        
                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>
        
                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
        
                            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                                <FiTrash2 size={20} color="#A8A8B3" />
                            </button>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default Profile;
