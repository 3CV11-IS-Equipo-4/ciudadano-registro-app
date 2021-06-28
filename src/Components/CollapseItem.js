import { Link } from 'react-router-dom';
export default function Button({options, title}) {
    return(
        <nav className="dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {title}
            </a>
            <ul className="dropdown-menu">
                {options.map(element => {                
                    return (
                        <li><Link to="#" className="dropdown-item">{element.business_name}</Link></li>
                    )
                })}
            </ul>
        </nav>
    );
}