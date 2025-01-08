import { NavLink } from "react-router-dom"
import './Header.css'
export const Headers = ()=>{

    return (
        <>
        <header>
            <div>
                <NavLink to="/">React Quary</NavLink>
                <ul>
                    <li>
<NavLink to ="/">Home</NavLink>
                    </li>
                    <li>
<NavLink to="/trad"> Fetchold</NavLink>
                    </li>
                    <li>
<NavLink to="/rq"> FetchRQ</NavLink>
                    </li>
                </ul>
            </div>
        </header>
        </>
    )
}