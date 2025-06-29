import { Fragment } from 'react/jsx-runtime';
import './CampoTexto.css';


function CampoTexto(props){

    /*  Função que será chamada quando o usuário digitar algo no campo de texto
        Ela recebe o evento de mudança (evento) e chama a função aoDigitado
        passando o valor atual do campo de texto (evento.target.value)
        Isso permite que o componente pai receba o valor digitado pelo usuário
        e atualize o estado correspondente
        O evento.target.value contém o valor atual do campo de texto
        aoDigitado é uma constante que executa uma arrow function que retorna o valor que foi digitado no campo texto para a prop aoDigitado do componente pai
    */
    const aoDigitarValor = (evento) => {
        props.aoDigitado(evento.target.value);
    }

    return (
            <div className={props.wrapperClass}>
                {/* 
                    O componente CampoTexto recebe várias props:
                    - label: o texto que será exibido como rótulo do campo
                    - labelClass: a classe CSS para o rótulo
                    - class: a classe CSS para o campo de entrada
                    - wrapperClass: a classe CSS para o contêiner do campo
                    - tipo: o tipo de entrada (por exemplo, "text", "email", etc.)
                    - placeholder: o texto de espaço reservado no campo
                    - obrigatorio: indica se o campo é obrigatório
                    - tamanhoMaximo: o tamanho máximo permitido para o valor do campo
                    - nome: o nome do campo
                    - id: o ID do campo
                    - valor: o valor atual do campo
                    - aoDigitado: função chamada quando o usuário digita algo no campo
                */}
                <label htmlFor={props.id} className={props.labelClass}>{props.label}</label>
                <input 
                    className={props.className}
                    type={props.tipo} 
                    placeholder={props.placeholder}
                    required={props.obrigatorio}
                    name={props.nome}
                    id={props.id}
                    maxLength={props.tamanhoMaximo}
                    value={props.valor}
                    onChange={aoDigitarValor}
                />
            </div>
    )
}

export default CampoTexto;

