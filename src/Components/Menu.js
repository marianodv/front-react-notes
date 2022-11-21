import {Link} from "react-router-dom"

function Menu(){
    return(
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/alta">Nueva Nota</Link>
            </li>
      </ul>
    )
}

export default Menu