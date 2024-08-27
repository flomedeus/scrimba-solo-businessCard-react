import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(){
    return(
        <footer>
            <a target="_blank" href='https://github.com/flomedeus'><FontAwesomeIcon icon={faGithubSquare} size='2x'/></a>
        </footer>
    )
}