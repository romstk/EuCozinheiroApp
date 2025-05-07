import './Card.css'; 


function Card({imagem, nome, descricao, autor }) {
    // baseURL é a URL base para as imagens que está sendo salva no backend quando salvamos as receitas o Django salva as imagens no diretório media pois foi definido no settings.py
    const baseURL = 'http://localhost:8000/media/';
    
    return (
        <div class="receitas__card">
            
            {imagem === null ? (
                <img class="receitas__imagem" src={process.env.PUBLIC_URL + '/imagens/' + 'not-found.png'} alt={nome} />
                

            ) :
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
