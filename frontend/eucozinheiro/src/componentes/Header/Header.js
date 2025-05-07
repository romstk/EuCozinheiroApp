import './Header.css';

function Header(){
    return(
        <header className="cabecalho">
            <section className="banner">
                <div className="banner__imagem"></div>
                <h1 className="banner__titulo">EuCozinheiro</h1>
                <h2 className="banner__subtitulo">Prazer em Cozinhar</h2>
            </section>
        </header>
    )
}
export default Header;