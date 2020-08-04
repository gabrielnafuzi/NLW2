import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/58908279?s=460&u=a3a71e0324b5c7c8778cba6bd9012353252a294f&v=4"
          alt="Gabriel Moraes"
        />
        <div>
          <strong>Gabriel Moraes</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla atque itaque voluptatum, fuga consectetur.
          </p>

      <footer>
        <p>
          Preço/hora
               <strong>R$ 50,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;