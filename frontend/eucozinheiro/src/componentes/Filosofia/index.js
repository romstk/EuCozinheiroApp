import './Filosofia.css';


function Filosofia(){
    return (

        <section className="filosofia">
            {/*A variável process.env.PUBLIC_URL é configurada automaticamente pelo Create React App e aponta para o diretório public do projeto. Essa variável é usada para referenciar arquivos estáticos que estão localizados na pasta public durante o build.
            */}
            <img src={process.env.PUBLIC_URL + '/imagens/banner-filosofia.jpg'} className="filosofia__banner">
            </img>

            <div className="filosofia__conteudo">
                <h2 className="filosofia__titulo">Nossa Filosofia</h2>
                <p className="filosofia__descricao">Acreditamos que cada refeição é uma oportunidade de:</p>
                <ul className="filosofia__lista">
                    <li>Promover bem-estar</li>
                    <li>Fortalecer laços familiares</li>
                    <li>Explorar novos sabores</li>
                    <li>Criar memórias duradouras</li>
                </ul>
            </div>
        </section>

    )
}

export default Filosofia