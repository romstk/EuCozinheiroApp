import './Footer.css';


function Footer(){
    
    return ( 
        <footer className="bg-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contato</h5>
                        <p>contato@eucozinheiro.com.br</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Links úteis</h5>
                        <ul className="list-unstyled">
                            <li><a href='/html_pages/politica_privacidade.html' target="_blank">Política de privacidade</a></li>
                            <li><a href='/html_pages/termos_uso.html' target="_blank">Termos de uso</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Redes sociais</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-square fa-2x"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram fa-2x"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-youtube fa-2x"></i></a></li>
                        </ul>
                    </div>
                </div>
                
                
                <p className="text-center">&copy; 2024 Eu Cozinheiro. Todos os direitos reservados. Desenvolvido por Ricardo Otomar Maria da Silva.</p>
            </div>
        </footer>

    )
}

export default Footer;