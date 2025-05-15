import './Card.css'; 


function Card({imagem, nome, descricao, autor }) {
    // baseURL é a URL base para as imagens que está sendo salva no backend quando salvamos as receitas o Django salva as imagens no diretório media pois foi definido no settings.py
    const baseURL = 'http://www.eucozinheiro.com.br/media/';
    
    return (
        <div class="receitas__card">
            
            {imagem === null ? (
                // Se a imagem for null, vamos carregar uma imagem padrão chamada not-found.png.
                // A imagem padrão deve estar no diretório public/imagens/not-found.png, dentro do projeto React.
                <img class="receitas__imagem" src={process.env.PUBLIC_URL + '/imagens/' + 'not-found.png'} alt={nome} />
                

            ) :
                // Se a imagem não for null, vamos carregar a imagem do diretório media do backend.
                // A imagem deve estar no diretório media do backend, que foi definido no settings.py do Django.
                // A imagem é carregada com a URL base + o nome da imagem.
                // O nome da imagem é salvo no banco de dados quando a receita é cadastrada.
                <img class="receitas__imagem" src={ baseURL + imagem } alt={nome} />                         
            } 

            <a class="receitas__titulo" href="#">
                <h3 class="receitas__nome">{nome}</h3>
            </a>

            <p class="receitas__descricao"> {descricao}</p>
                            
            <span class="receitas__autor">Receita por: {autor}</span>               
        </div>
    )
}

export default Card;
