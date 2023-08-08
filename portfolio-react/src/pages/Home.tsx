import Button from "../components/Button";
import '../styles/Buttons.css'
import useNewText from '../hooks/useNewText.tsx'

function Home() {
    const { toggleIsButton, isButton } = useNewText();


    return (
        <>
            <div>
                {isButton ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'About'}
                    type={"button"}
                    className={".on-hover--40 .animate"}
                    onMouseLeave={toggleIsButton}

                />) : (<h1
                    onMouseEnter={toggleIsButton}
                >
                    Hello
                </h1>)}
            </div>
            <div>
                {isButton ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'Skills'}
                    type={"button"}
                    className={".on-hover--40 .animate"}
                    onMouseLeave={toggleIsButton}

                />) : (<h1
                    onMouseEnter={toggleIsButton}
                >
                    Hello
                </h1>)}
            </div>
            <div>
                {isButton ? (<Button
                    onClick={() => console.log('chamou')}
                    tittle={'Contact'}
                    type={"button"}
                    className={".on-hover--40 .animate"}
                    onMouseLeave={toggleIsButton}

                />) : (<h1
                    onMouseEnter={toggleIsButton}
                >
                    Hello
                </h1>)}
            </div>
        </>
    )
}


export default Home;