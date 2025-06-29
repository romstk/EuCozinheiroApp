import './Institucional.css';

function Institucional(){ 
    return (
        <section className="institucional">
            
            <div className="institucional__conteudo">
                <h2 className="institucional__titulo">O que oferecemos</h2>
                <dl className="institucional__lista">
                    <dt className="institucional__lista--titulo">Receitas Cuidadosamente Elaboradas</dt>
                        <dd className="institucional__lista--dado">Cada prato é pensado para trazer o máximo de benefícios à saúde, sem abrir mão do sabor</dd>
                    <dt className="institucional__lista--titulo">Ingredientes Selecionados</dt>
                        <dd className="institucional__lista--dado">Focamos em ingredientes frescos, sazonais e nutritivos, escolhidos para cada ocasião especial</dd>
                    <dt className="institucional__lista--titulo">Experiências Culinárias</dt>
                        <dd className="institucional__lista--dado">Nossas receitas são mais que instruções - são convites para momentos de alegria na cozinha</dd>
                    <dt className="institucional__lista--titulo">Dicas de Bem-Estar</dt>
                        <dd className="institucional__lista--dado">Além das receitas, compartilhamos conselhos para uma vida mais saudável e feliz</dd>
                </dl>

                <p className="institucional__span">Junte-se a nós nesta jornada deliciosa. Prove o sabor da diversão, tempere com saúde e sirva uma grande porção de felicidade para sua família!</p>

            </div>

            <div className="institucional__banner">

            </div>
            

        </section>
    )

}

export default Institucional;