import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header(){

    return (
        <header>
            <h1>Voinea Cristian</h1>
            <h2>Frontend Developer</h2>
            <a href='#' className="header-website">flomedeus.website</a>
            <div className="header-buttons">
                <div className="button">
                    <a className="btn email" href="#"><FontAwesomeIcon icon={faEnvelope}/> Email</a>
                </div>
                <div className="button">
                    <a target='_blank' className="btn linkedin" href="https://www.linkedin.com/in/george-cristian-voinea-1b230723b/"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
                </div>
                
            </div>
        </header>
    )
}