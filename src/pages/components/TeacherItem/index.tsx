import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps{
    title?: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
        <header>
            <img src="https://cdna.artstation.com/p/assets/images/images/027/984/748/4k/grace-liu-nexus-blitz-splashart.jpg?1593139958" width="80" height="80" alt="Professor"/>
            <div>
                <strong>Nome do Professor</strong>
                <span>Quimica</span>
            </div>
        </header>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br/>
            <br/>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 99,99</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
  );
}

export default TeacherItem;
