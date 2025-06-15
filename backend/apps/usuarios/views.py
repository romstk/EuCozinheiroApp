from django.shortcuts import render
from apps.usuarios.models import Usuario
from django.http import JsonResponse
import requests

def cadastrar(request):
    """
    Função responsável por receber do frontend dados do usuário para o cadastro.
    O frontend irá realizar um POST para essa url com os dados do usuário.
    """
    if request.method == 'POST':
        # Aqui você pode processar os dados do formulário
        # Por exemplo, salvar os dados no banco de dados
        dados = request.POST
        print(dados)
        return JsonResponse({"status": "ok"})

        
    # Se o método for GET, apenas retorna um JsonResponse com status ok
    # Só para teste 
    if request.method == 'GET':
        return(JsonResponse({"status": "ok"}))

    


#Função desenvolvida para realizar busca no site do IBGE pelos estados brasileiros para utilizarmos para renderizar o para o formulário do cadastro de usuário 
def buscar_uf(request):
    response = requests.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    #cria uma nova lista com os atributos, id, nome, sigla com base na iteração do objteto response.json
    ufs = [{'id': uf['id'], 'nome': uf['nome'], 'sigla':uf['sigla']} for uf in response.json()]
    return JsonResponse(ufs, safe=False)

#Função desenvolvida para realizar busca no site do IBGE pelas cidade brasileiras para utilizarmos para renderizar o para o formulário do cadastro de usuário 
#Ao usar JsonResponse no Django, por padrão, ele só permite que você passe dicionários (dict) como o primeiro argumento. Isso é uma medida de segurança para evitar ataques de injeção de código JavaScript, que poderiam ocorrer se você permitisse que qualquer tipo de dado fosse serializado para JSON.
#No entanto, se você precisar retornar outros tipos de dados, como listas (list), tuplas (tuple), etc., você precisa definir o parâmetro safe como False. Isso permite que esses dados sejam serializados para JSON.
def buscar_cidades(request, uf_id):
    #cria uma nova lista com os atributos, id, nome, sigla com base na iteração do objteto response.json
    response = requests.get(f'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{uf_id}/municipios')
    cidades = [{'id': cidade['id'], 'nome': cidade['nome']} for cidade in response.json()]
    print(cidades)
    return JsonResponse(cidades, safe=False)
    