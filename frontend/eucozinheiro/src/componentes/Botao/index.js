import './Botao.css';

function Botao(props) {
    return (
        <button 
            className={props.className} 
            type={props.tipo} 
            onClick={props.aoClicar}
        >
            {/* props.children é tudo que está entre <Botao> ... </Botao>.
            Ele permite que o botão mostre qualquer conteúdo, não só texto fixo.
            Se não usar props.children, o botão ficaria sempre vazio ou com texto fixo, perdendo flexibilidade. */}
            {props.children}
        </button>
    );
}

export default Botao;
// O componente Botao é um botão reutilizável que recebe classes, tipo e uma função de clique como propriedades.