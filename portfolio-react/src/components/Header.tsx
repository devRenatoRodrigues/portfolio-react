import { Link, useLocation } from 'react-router-dom'
import Logotipo from '../assets/Logotipo.svg'
import useNewText from '../hooks/useNewText.tsx'
import '../styles/Global.css'
import Button from './Button.tsx';

export default function Header() {
    const { isBack,
        toggleIsBack,
    } = useNewText();
    const location = useLocation();

    const isHome = location.pathname === '/';
    return (
        <header className="header-container">
            <img className="logo" src={Logotipo} alt="logo" />
            {!isHome && (isBack ? (
                <Link to="/" >
                    <Button
                        title={'Back to home'}
                        type={"button"}
                        className={"back-button text-color-white"}
                        onMouseLeave={toggleIsBack}

                    />
                </Link>
            ) : (<h1
                onMouseEnter={toggleIsBack}
                className={"text-color-white item"}
            >
                Back
            </h1>))}
        </header>
    )
}
