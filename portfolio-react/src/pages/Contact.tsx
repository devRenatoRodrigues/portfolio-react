import Footer from "../components/Footer"
import Header from "../components/Header"
import GitHub from "../assets/github-vetor.svg"
import Linkedin from "../assets/linkedin-vetor.svg"
import Email from "../assets/email-vetor.svg"

export default function Contact() {
    return (
        <>
            <Header />
            <main>

                <h1 className="text-color-white phrase"
                >
                    Contact me:
                </h1>
                <div className="phrase-container">
                    <p className="text-color-white phrase">
                        Estou animado com a perspectiva de contribuir em projetos desafiadores e aprender com profissionais experientes.
                        Se houver a chance de fazer parte de sua equipe,
                        ficaria grato pela oportunidade de discutir como posso ser um ativo valioso.

                        Sinta-se a vontade para entrar em contato por meio de qualquer plataforma abaixo:
                    </p>
                    <div className="img-social-media-container">
                        <a href="https://github.com/devRenatoRodrigues" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-social-media"
                                src={GitHub} alt="GitHub"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/devrenatorodrigues/" target="_blank" rel="noopener noreferrer">
                            <img
                                className="img-social-media"
                                src={Linkedin} alt="LinkeDin"
                            />
                        </a>
                        <a href="mailto:devrenatorodrigues@gmail.com">
                            <img
                                className="img-social-media"
                                src={Email} alt="Email"
                            />
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
