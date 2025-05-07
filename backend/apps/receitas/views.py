from django.shortcuts import render
from apps.receitas.models import Receita
from django.http import JsonResponse


def receitas (request):
    '''
    Função que responsável por buscar os dados das receitas no banco de dados e retornar um JSon para o frontend. 
    :param request: Objeto de requisição HTTP   
    :return: Retorna um JsonResponse com os dados das receitas publicadas.

    queryset = Receita.objects.order_by("data").filter(publicada=True)
        #cria um objeto que vai trazer os dados do banco de dados através de models.
        #Filtramos apenas as receitas publicadas e ordenando por data 
    receitas_list = list(queryset.values())  # transforma em lista de dicts
         receitas_list será uma lista que armazena os dados de receitas para ficar legível como JSON. Passamos o parâmetro values os nomes dos campos que queremos retornar. autor__username nomeamos para pegar o username do autor da receita.
    '''
    queryset = Receita.objects.order_by("data").filter(publicada=True).values()
    print(list(queryset.values()))
    receitas_list = list(queryset.values(
        'id',
        'nome',
        'descricao',
        'imagem',
        'autor__username'  # note: dois underlines para buscar username do autor)
    )) 
    
    return JsonResponse(receitas_list, safe=False)# safe=False permite listas no JsonResponse
