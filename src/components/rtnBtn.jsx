import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

const RtnBtn =() =>{
    return(
        <a href="https://mylearningprojects.netlify.app/">
            <FontAwesomeIcon 
            icon={faHome} 
            size='2x'/> 
        </a> 
    )
}
export default RtnBtn;