import * as Route from "@/constants/routes";
import logo from "@/images/logo-full.png";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [Route.HOME, Route.SHOP];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <div>
          <span>
            <strong>Assine nossa newsletter</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>Institucional</strong>
          </span>
          <span>
            <strong>Central de Ajuda</strong>
          </span>
          <span>
            <strong>Perguntas Frequentes</strong>
          </span>
          <span>
            <strong>Contato</strong>
          </span>
          <span>
            <strong>Quem Somos</strong>
          </span>
        </div>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <div>
          <span>
            <strong>Dúvidas Frequentes</strong>
          </span>
          <span>
            <strong>Privacidade</strong>
          </span>
          <span>
            <strong>Trocas & Devoluções</strong>
          </span>
          <span>
            <strong>Entrega & Frete</strong>
          </span>
          <span>
            <strong>Pagamento</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>Fale Conosco</strong>
          </span>
          <span>
            <strong>5511930890221</strong>
          </span>
          <span>
            <strong>(11) 93089-0221</strong>
          </span>
          <span>
            <strong>contato@ignitecollection.com.br</strong>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
