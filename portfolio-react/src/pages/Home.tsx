import Button from "../components/Button";
import '../styles/Global.css'
import useNewText from '../hooks/useNewText.tsx'
import Header from "../components/Header.tsx";

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
                {isAbout ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'About'}
                    type={"button"}
                    className={"giant-button text-color-white item"}
                    onMouseLeave={toggleIsAbout}

                />) : (<h1
                    onMouseEnter={toggleIsAbout}
                    className={"text-color-white item"}
                >
                    Hello.
                </h1>)}
                {isProjects ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'Works'}
                    type={"button"}
                    className={"giant-button text-color-green item"}
                    onMouseLeave={toggleIsProjects}

                />) : (<h1
                    onMouseEnter={toggleIsProjects}
                    className={"text-color-green item"}
                >
                    I am
                </h1>)}
                {isContact ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'Contact'}
                    type={"button"}
                    className={"giant-button text-color-green item"}
                    onMouseLeave={toggleIsContact}

                />) : (<h1
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