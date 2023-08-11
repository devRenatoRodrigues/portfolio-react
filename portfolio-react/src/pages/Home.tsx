import Button from "../components/Button";
import '../styles/Global.css'
import useNewText from '../hooks/useNewText.tsx'
import Header from "../components/Header.tsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.tsx";

function Home() {
    const { isAbout,
        isWork,
        isContact,
        toggleIsAbout,
        toggleIsWork,
        toggleIsContact,
    } = useNewText();

    return (
        <>
            <Header />
            <div className="vertical-center">
                {isAbout ? (
                    <Link to="/about" >
                        <Button
                            title={'About'}
                            type={"button"}
                            className={"giant-button text-color-white item"}
                            onMouseLeave={toggleIsAbout}

                        />
                    </Link>
                ) : (<h1
                    onMouseEnter={toggleIsAbout}
                    className={"text-color-white item"}
                >
                    Hello.
                </h1>)}
                {isWork ? (
                    <Link to="/works" >
                        <Button
                            title={'Works'}
                            type={"button"}
                            className={"giant-button text-color-green item"}
                            onMouseLeave={toggleIsWork}

                        />
                    </Link>
                ) : (<h1
                    onMouseEnter={toggleIsWork}
                    className={"text-color-green item"}
                >
                    I am
                </h1>)}
                {isContact ? (
                    <Link to="/contact" >
                        <Button
                            title={'Contact'}
                            type={"button"}
                            className={"giant-button text-color-green item"}
                            onMouseLeave={toggleIsContact}

                        />
                    </Link>
                ) : (<h1
                    onMouseEnter={toggleIsContact}
                    className={"text-color-green item"}
                >
                    Renato
                </h1>)}


            </div>
            <Footer />
        </>
    )
}


export default Home;