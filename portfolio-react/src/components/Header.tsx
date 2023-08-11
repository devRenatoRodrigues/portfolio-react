import { Link } from 'react-router-dom'
import Logotipo from '../assets/Logotipo.svg'
import Back from '../assets/back.svg'
import '../styles/Global.css'

export default function Header() {
    return (
        <header className="header-container">
            <img className="logo" src={Logotipo} alt="logo" />
            <Link to="/" >
                <img className="back-arrow" src={Back} alt="logo" />
            </Link>
        </header>
    )
}
