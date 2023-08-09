import Button from "../components/Button";
import '../styles/Global.css'
import useNewText from '../hooks/useNewText.tsx'

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
            <div>
                {isAbout ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'About'}
                    type={"button"}
                    className={"giant-button text-color-white"}
                    onMouseLeave={toggleIsAbout}

                />) : (<h1
                    onMouseEnter={toggleIsAbout}
                    className={"text-color-white"}
                >
                    Hello ,
                </h1>)}
            </div>
            <div>
                {isProjects ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'Projects'}
                    type={"button"}
                    className={"giant-button text-color-green"}
                    onMouseLeave={toggleIsProjects}

                />) : (<h1
                    onMouseEnter={toggleIsProjects}
                    className={"text-color-green"}
                >
                    I am
                </h1>)}
            </div>
            <div>
                {isContact ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'Contact'}
                    type={"button"}
                    className={"giant-button text-color-green"}
                    onMouseLeave={toggleIsContact}

                />) : (<h1
                    onMouseEnter={toggleIsContact}
                    className={"text-color-green"}
                >
                    Renato
                </h1>)}
            </div>
        </>
    )
}


export default Home;