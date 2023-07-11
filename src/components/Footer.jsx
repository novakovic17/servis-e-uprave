import React from 'react';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
 

function Footer() {
  return (
    <div className="footer">
      <div className="footerItem">
        <ul>
          <strong>Kontakt</strong>
          <li>+1 234 567 890</li>
          <li>info@example.com</li>
          <li className="footerLink">
            <BsFillEnvelopeFill />
            <Link to="/kontakt" className="footerLinkText">
              Pošaljite nam poruku
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerItem">
        <ul>
          <strong>Lokacija</strong>
          <li>123 Main Street, Grad</li>
          <li>456 Park Avenue, Grad</li>
          <li>789 Elm Road, Grad</li>
        </ul>
      </div>
      <div className="footerItem">
        <ul>
          <strong>© 2023 Sva prava zadržana</strong>
        
        </ul>
      </div>
    </div>
  );
}

export default Footer;
