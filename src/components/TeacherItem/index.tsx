import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="" alt="" />
        <div>
          <strong>Jefferson Guanabara</strong>
          <span>Filosofia</span>
        </div>
      </header>
      <p>
        Ser ou não ser, eis a questão?
        <br /><br />
        Saindo da caverna e redescobrindo um mundo totalmente diferente.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 200,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;