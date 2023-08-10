import Button from "../components/Button";
import '../styles/Global.css'
import useNewText from '../hooks/useNewText.tsx'
import Header from "../components/Header.tsx";
import { Link } from "react-router-dom";

function Home() {
    const { isAbout,
        isProjects,
        isContact,
        toggleIsAbout,
        toggleIsProjects,
        toggleIsContact,
    } = useNewText();

    return (
        <>
            <Header />
            <div className="vertical-center">
                {isAbout ? (
                    <Link to="/about" >
                        <Button
                            onClick={() => console.log('chamou')}
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
                {isProjects ? (
                    <Link to="/works" >
                        <Button
                            onClick={() => console.log('chamou')}
                            title={'Works'}
                            type={"button"}
                            className={"giant-button text-color-green item"}
                            onMouseLeave={toggleIsProjects}

                        />
                    </Link>
                ) : (<h1
                    onMouseEnter={toggleIsProjects}
                    className={"text-color-green item"}
                >
                    I am
                </h1>)}
                {isContact ? (
                    <Link to="/contact" >
                        <Button
                            onClick={() => console.log('chamou')}
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
        </>
    )
}


export default Home;