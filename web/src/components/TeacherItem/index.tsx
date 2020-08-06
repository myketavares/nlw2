import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/27736120?s=460&u=69a3c65ab26158e2d5c3a63953adbc53e1ebb99e&v=4"
          alt="maykon-tavares"
        />
        <div>
          <strong>Maykon Tavares</strong>
          <span>Lógica de Programação</span>
        </div>
      </header>
      <p>
        Entusiasta em ganhar dinheiro. Quer dinheiro sempre.
        <br />
        Gosta de conhecimento tambem, mas por ser capricorniano prefere
        dinheiro.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong> R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
