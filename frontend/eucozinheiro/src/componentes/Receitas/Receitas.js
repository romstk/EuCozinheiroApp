import './Receitas.css';

import React, {useEffect, useState} from 'react';
import Card from '../Card/Card';


function Receitas() {
    const [receitas, setReceitas] = useState([]);
    useEffect(() => {
        const fetchReceitas = async () => {
            try {
                const response = await fetch('http://localhost:8000/backend/receitas');
                if (!response.ok) {
                    throw new Error('Erro ao buscar receitas');
                }
                const data = await response.json();

                const receitasAdaptadas = data.map(item => ({
                    id: item.id,
                    imagem: item.imagem,
                    nome: item.nome,
                    descricao: item.descricao,
                    autor: item.autor__username,
                }));

                setReceitas(receitasAdaptadas);
            } catch (error) {
                console.error('Erro ao carregar receitas:', error);
            }
        };

        fetchReceitas();

    }, []);

    
    return (
        <section className="receitas">
            <div className="receitas__conteudo">
                <h2 className="receitas__titulo">Receitas </h2>
                <p className="receitas__texto">Nesta área você encontra as receitas cadastradas no site, dicas sobre os ingredientes utilizados e comentários de especialistas sobre o prato.</p>
            </div>

            {/*Neste ponto vamos ter uma navbar de busca das receitas para podermos filtrar os dados*/}  

            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                  <form className="d-flex" role="search" method="POST" action="#">
                    <input className="form-control me-2" type="search" placeholder="Informe o título" aria-label="Search" name="filtro"></input>
                    <button className="btn btn-outline-success" type="submit">Filtro por título</button>
                  </form>
                </div>
              </nav>
                <div class="receitas__container" id="receitas__container">
                
                {/*Neste ponto vamos montar a lista de cards dinamicamente
                    Vamos carregar os dados das receitas vindo do backend armazenados na variável chamda Cards contendo os dados das receitas para montar os cards dinamicamente 

                    No for abaixo fazemos uma iteração nos dados 
                    Temos o receita_id que são os ids, 1, 2…. que numeram os dados,
                    Info são as informações contidas em cada item do dicionário
                    Cards é o dicionário de dados recebido.
                */}
                {/**
                 * Aqui vamos fazer um loop nos dados das receitas e criar um card para cada receita.
                 * Vamos usar a função map para iterar sobre o array de receitas e criar um card para cada receita.
                 * A função map vai retornar um array de componentes Card, onde cada componente Card vai receber as props imagem, nome, descricao e autor.
                 * A chave key é importante para o React identificar cada componente de forma única e otimizar a renderização.
                 * A imagem é carregada do diretório public, se a imagem for null, vamos carregar uma imagem padrão chamada not-found.png.
                 * O nome, descrição e autor são passados como props para o componente Card.
                 * O componente Card vai renderizar as informações da receita de forma estilizada.
                 */}
                {receitas.map((receita) => (
                    console.log(receita),
                    <Card
                        key={receita.id}
                        imagem={receita.imagem}
                        nome={receita.nome}
                        descricao={receita.descricao}
                        autor={receita.autor}
                    />
                ))}
                </div>                
        </section>    
    )
}

export default Receitas;
