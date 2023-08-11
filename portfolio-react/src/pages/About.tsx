import Footer from "../components/Footer"
import Header from "../components/Header"
import Curriculum from "../public/Curriculum.pdf"

export default function About() {
    return (
        <>
            <Header />
            <main>
                <h1
                    className="text-color-white phrase"
                >Hello World, I'm Renato Rodrigues from São Paulo, Brazil.
                </h1>
                <div className="phrase-container-about">
                    <p className="text-color-white phrase">
                        Após anos trabalhando como vendedor autônomo, tomei a decisão de seguir um sonho antigo: me tornar desenvolvedor.
                        Minha experiência com programação vem desde de muito jovem, quando aos 12 anos criei um servidor para Tibia um MMORPG famoso.
                        Utilizei linguagens como C++ e Lua, além de criar página da web para que novos jogadores pudessem se cadastrar.
                        Após o ensino médio, iniciei a faculdade de Análise e Desenvolvimento de Sistemas, mas acabei pausando.
                        No entanto, pretendo retomar esse caminho no futuro.
                    </p>
                    <p className="text-color-white phrase">
                        Atualmente, movido por essa paixão, estou me aprofundando cada vez mais na área e sinto muita sede de aprender.
                        Tenho uma capacidade de aprendizado rápido e estou determinado a me tornar um desenvolvedor FullStack melhor a cada dia.
                        Para alcançar esse objetivo, não medirei esforços, dedicando horas incontáveis ao aprendizado.
                        Sempre fui uma pessoa curiosa e com diversos interesses, sempre gostando de me aprofundar neles.
                        O aprendizado constante é o que me alegra na programação. Tenho uma energia abundante na busca por autodesenvolvimento e crescimento profissional.
                    </p>
                    <p className="text-color-white phrase">
                        Atualmente estou cursando Desenvolvimento Web na Trybe, estou aprimorando minhas habilidades.
                        Desenvolvi projetos como um App de Receitas, Jogos de Trivia e muitos outros, utilizando tecnologias como TypeScript, JavaScript, Node.js e React.js.
                        Além disso, tenho exercitado minhas Soft Skills, colaborando com colegas de turma, seja esclarecendo ou tirando dúvidas e criando projetos em grupo.
                    </p>
                    <p className="text-color-white phrase">
                        Minha aspiração é transformar minha paixão em soluções e enfrentar desafios nessa área.
                        Meu objetivo não é apenas aperfeiçoar minhas habilidades técnicas, mas também contribuir para projetos significativos que impactem positivamente a vida das pessoas.
                        O propósito de minha jornada como desenvolvedor vai além do código; visa fazer a diferença através da tecnologia.
                    </p>
                    <a className="my-resume-link text-color-green" href={Curriculum} download>{`My Resume(PDF)`}</a>
                </div>

// criar tabela para colocar hardskills e sofskills
            </main>
            <Footer />
        </>
    )
}
