import React from "react";

import { FaFacebookSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div  className="mdb-class">
        <div className="row">
            <div className="footer-column">
            <h5 className="footer-title">Contactez-nous</h5>
            <p>                
                ENSIAS
                Avenue Mohammed Ben Abdallah Regragui, Madinat Al Irfane, BP 713, Agdal Rabat, Maroc 
                <br /> <br /> Télécopie : (+212) 5 37 77 72 30
            </p>
            </div>
            <div className="footer-column">
            <h5 className="footer-title">ENSIAS</h5>
            <ul>
                <ul className="footer-icons">
                    <a className="footer-icons-padding" href="http://fr-fr.facebook.com/ensias/"><FaFacebookSquare style={{color: '#af9a7d'}}/></a>
                    <a className="footer-icons-padding" href="http://twitter.com/search?q=%23ENSIAS"><FaTwitterSquare style={{color: '#af9a7d'}}/></a><br />
                </ul>
                <li>
                    <a href="http://ensias.um5.ac.ma/"> ENSIAS </a><br />
                </li>
                <li>
                    <a href="http://www.um5.ac.ma/">UM5</a><br />
                </li>
            </ul>
            </div>
            <div className="footer-column">
                <h5 className="footer-title">ENSIAS Profiles</h5>
                <ul>
                    <ul className="footer-icons">
                        <a className="footer-icons-padding" href="http://fr-fr.facebook.com/ensias/"><FaFacebookSquare style={{color: '#af9a7d'}}/></a>
                        <a className="footer-icons-padding" href="#!"><FaLinkedin style={{color: '#af9a7d'}}/></a><br />
                    </ul>
                    <li>
                        <a href="http://ensias.um5.ac.ma/"> ENSIAS Profiles </a><br />
                    </li>
                    <li>
                        <a href="http://www.um5.ac.ma/">UM5</a><br />
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-link">
            &copy; {new Date().getFullYear()} Copyright:  Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes
        </div>
    </div>
  );
}

export default Footer;