import Logotipo from '../assets/Logotipo.png'
import '../styles/Global.css'

export default function Header() {
    return (
        <header className="header-container">

            <img className="logo" src={Logotipo} alt="logo" />
        </header>
    )
}
