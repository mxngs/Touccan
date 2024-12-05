import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom"; // import do link

//funcionando
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src="../img/logoPrincipal.svg" alt="Logo Touccan" />
            </div>

            <ul className="sidebar-menu">
                {[
                    { 
                        img: '../img/home.png', text: 'Página Inicial', to: "/home"
                    },
                    { 
                        img: '../img/chat.png', text: 'Chat', to: "/chat"
                    },
                    { 
                        img: '../img/historico.png', text: 'Histórico', to: "/historico"
                    },
                    { 
                        img: '../img/cofrinho.png', text: 'Cofre', to: "/cofre"
                    },
                    { 
                        img: '../img/configurações.png', text: 'Configurações', to: "/configuracao"
                    },
                ].map((item, index) => (
                    <li className="menu-item" key={index}>
                        <img src={item.img} alt={item.text} />
                        <Link to={item.to || "#"}>{item.text}</Link>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Sidebar;
