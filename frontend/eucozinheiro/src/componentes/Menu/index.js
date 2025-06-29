import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

export default function Menu () {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/cadastrousuario">
                    Cadastro de Usuários
                </MenuLink>
            </nav>
        </header>
    )
}

