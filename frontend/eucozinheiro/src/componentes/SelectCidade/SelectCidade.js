import { useState, useEffect, use } from "react";
import { carregarCidades } from "../../js/usuarios/Cidades_UF"; 

function SelectCidade( {ufSelecionada, cidadeSelecionada, setCidadeSelecionada} ){
    const [listaCidades, setListaCidades] = useState([]); // Estado para armazenar a lista de cidades

    useEffect( () => {
        async function buscarCidades(){
        if(ufSelecionada){
        
            try{
                const cidades = await carregarCidades(ufSelecionada.id); // Chama a função externa para carregar as cidades
                setListaCidades(cidades); // Atualiza o estado com a lista de cidades
                setCidadeSelecionada('');  // Limpa a seleção anterior quando UF muda
            }catch(e){
                console.error('Erro ao carregar cidades:', e);
            }
        }else {
            setListaCidades([]); // Limpa a lista de cidades se nenhuma UF estiver selecionada
        }    
        }
        buscarCidades(); // Chama a função para buscar as cidades quando o componente é montado ou quando ufSelecionada muda
    }, [ufSelecionada, setCidadeSelecionada]);

    const handleChange = (event) => {
        setCidadeSelecionada(event.target.value);
    };

    return (
        <div className="col-4">
            <label htmlFor="cidade" className="form-label">Cidade</label>  
            <select
                id="cidade"
                name="cidade"
                className="form-control"
                value={cidadeSelecionada}
                onChange={handleChange}
                required
            >
                <option value="">Selecione a cidade</option>
                {listaCidades.map( (cidade) => (
                    <option key={cidade.id} value={cidade.nome}>
                        {cidade.nome}
                    </option>
                ))}
            </select>
       </div> 
    )

}

export default SelectCidade;