import { useEffect, useState } from "react";
import { carregarUFs } from "../../js/usuarios/Cidades_UF"; // Importa a função para carregar UFs

function SelectUF({valor, aoAlterar}) {
    const [listaUFs, setListaUFs] = useState([]); // Estado para armazenar a lista de UFs

    useEffect( () => {
       async function buscarUFs(){
            try{
                const ufs = await carregarUFs(); // Chama a função externa para carregar as UFs
                setListaUFs(ufs); // Atualiza o estado com a lista de UFs
                
            }catch(e){
                window.alert("Erro ao carregar as UFs. Por favor, tente novamente mais tarde.");
                console.error("Erro ao carregar UFs:", e);
            }
       }
         buscarUFs(); // Chama a função para buscar as UFs quando o componente é montado    
    }, []); // O array vazio [] significa que o efeito será executado apenas uma vez, quando o componente for montado


    return (
        <div className="col-2">  
            <label className="form-label">UF</label>
            <select 
                className="form-control"
                value={valor.sigla}
                onChange={(evento) => { 
                    // Chama a função aoAlterar passando o valor selecionado
                    const ufSelecionada = listaUFs.find(uf => uf.sigla === evento.target.value);
                    aoAlterar(ufSelecionada);
                }}
                required
                
            >
                <option value="">Selecione a UF</option>
                {listaUFs.map(uf => (
                    <option key={uf.id} value={uf.sigla}>
                        {uf.nome}
                    </option>
                ))}
            </select>    
        </div>
    )
}

export default SelectUF;