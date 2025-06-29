import './CadastroUsuario.css';
import CampoTexto from '../CampoTexto';
import Botao from '../Botao';
import SelectUF from '../SelectUF';    
import SelectCidade from '../SelectCidade'; // Importa o componente SelectCidade
import { useEffect, useState } from 'react';


function CadastroUsuario() {

    // Definindo os estados para os campos do formulário
    // Esses estados serão atualizados conforme o usuário digita nos campos
    // useState é um Hook do React que permite adicionar o estado a um componente funcional
    // Cada useState retorna um par: o valor atual do estado e uma função para atualizá-lo
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [senha1, setSenha1] = useState('');
    const [senha2, setSenha2] = useState('');    

    // Estado para armazenar a lista de cidades que atualizaremos quando alterar a UF
    const [cidades, setCidades] = useState([]); // Estado para armazenar as cidades
    
    const aoSalvar = (evento) => {
        // Previne o comportamento padrão do formulário, que é recarregar a página
        evento.preventDefault();

        // Aqui você pode adicionar a lógica para salvar os dados do usuário
        // Por exemplo, enviar os dados para um servidor ou API
        console.log('Usuário cadastrado:', {
            nome,
            email,
            uf: uf.sigla, // Envia a sigla da UF pois estou guardando a UF como um objeto completo 
            cidade,
            senha1,
            senha2
        });

        // Limpa os campos após o envio
        setNome('');
        setEmail('');
        setUf('');
        setCidade('');
        setSenha1('');
        setSenha2('');
    }


    return (
        <div className="container-fluid mt-5 p-5">
            <h1 className="h1">Cadastro de usuarios</h1>
                <form id="form" onSubmit={aoSalvar}>
                    <div className="row mb-3">  
                        
                            <CampoTexto 
                                label="Nome" 
                                labelClass="form-label"
                                className="form-control"
                                wrapperClass="col-6"
                                tipo="text" 
                                placeholder="Digite seu nome" 
                                obrigatorio={true}
                                tamanhoMaximo={50}
                                nome="nome"
                                id="nome"
                                valor={nome} // O valor do campo será controlado pelo estado nome
                                // Quando o usuário digitar algo, a função setNome será chamada para atualizar o estado 
                                aoDigitado={valor => setNome(valor)}
                            />
                        
                    </div>
                    
                    <div className="row mb-3">  
                        <CampoTexto 
                            label="Email" 
                            labelClass="form-label"
                            className="form-control"
                            wrapperClass="col-5"
                            tipo="email" 
                            placeholder="Ex. josesilva@gmail.com" 
                            obrigatorio={true}
                            tamanhoMaximo={50}
                            nome="email" 
                            id="email"  
                            valor={email}
                            aoDigitado={valor => setEmail(valor)} 
                        />
                    </div>

                    <div className="row mb-3">  
                        {/*Neste campo passo o estado de uf em valor e aoAlterar passo a função setUf que atualiza o estado, para que no componente SelectUF eu possa capturar o valor selecionado e atualizar o estado uf */}
                        <SelectUF valor={uf} aoAlterar={setUf} />
                    </div>
            
                    <div className="row mb-3">  
                        {/*Passa o estado ufSelecionada para o componente SelectCidade, que irá buscar as cidades correspondentes*/}
                        <SelectCidade
                            ufSelecionada={uf} // Passa o estado uf para o componente SelectCidade
                            cidadeSelecionada={cidade} // Passa o estado cidade para o componente SelectCidade
                            setCidadeSelecionada={setCidade} // Passa a função para atualizar o estado cidade
                        >
                        </SelectCidade>
                        
                    </div>
                    
                    <div className="row mb-3">  
                        <CampoTexto 
                            label="Senha" 
                            labelClass="form-label"
                            className= "form-control"
                            wrapperClass="col-4"
                            tipo="password"
                            placeholder="informe sua senha" 
                            obrigatorio={true}
                            tamanhoMaximo={70}
                            nome="senha_1"
                            id="senha_1"
                            valor={senha1}
                            aoDigitado={valor => setSenha1(valor)}  
                        />    
                    </div>
    
                    <div className="row mb-3">  
                        <CampoTexto 
                            label="Confirme sua Senha" 
                            labelClass="form-label"
                            className= "form-control"
                            wrapperClass="col-4"
                            tipo="password"
                            placeholder="Confirme sua senha" 
                            obrigatorio={true}
                            tamanhoMaximo={70}
                            nome="senha_2"
                            id="senha_2"
                            valor={senha2}
                            aoDigitado={valor => setSenha2(valor)}  
                        />    
                    </div>
                    <Botao className="btn btn-primary" tipo="submit" aoClicar={null}>
                        Cadastrar
                    </Botao>
                </form>
        </div>     
    )
}

export default CadastroUsuario;