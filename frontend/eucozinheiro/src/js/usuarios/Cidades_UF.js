/*Neste arquivo vamos criar as funções que serão utilizadas para carregar as UFs e Cidades no formulário de cadastro de usuários
Este arquivo faz chamadas para a API do IBGE e retorno os componentes necessários para o cadastro de usuários   
*/
export async function carregarUFs() {
    // Variável para o endereço da API, definida no arquivo .env
    const API_BASE_URL = process.env.REACT_APP_API_URL;
    try {
        const api = await fetch(`${API_BASE_URL}/buscar-uf/`);
        const ufs = await api.json();
        
        return ufs;
    } catch (e) {
        console.error("Erro ao buscar UFs", e);
        return [];
    }
}

export async function carregarCidades(ufId) {
    // Variável para o endereço da API, definida no arquivo .env

    console.log("Carregando cidades para a UF:", ufId);
    const API_BASE_URL = process.env.REACT_APP_API_URL;
    try{
        //Faz a requisição para buscar cidades
        const api = await fetch(`${API_BASE_URL}/buscar-cidades/${ufId}`);
        //Converte o retorno em um json com as cidades 
        const cidades = await api.json()
        return cidades;
    }catch(e){
        console.error("Erro ao buscar cidades", e);
        return [];
    }
}


