#Arquivo responsável pelo gerenciamento das urls específicas da app usuarios que será #importado no urls.py do setup da aplicação geral 
# importamos aqui as views de receitas para poder utilizá-las na lista de rotas/urls
from django.urls import path
from apps.usuarios.views import cadastrar
from apps.usuarios.views import buscar_uf, buscar_cidades

#Criamos uma lista que será responsável por gerenciar as rotas/urls do app usuarios
urlpatterns = [
    path('cadastrar/', cadastrar, name='cadastrar'),
    path('buscar-uf/', buscar_uf, name='buscar_uf'),
    path('buscar-cidades/<int:uf_id>/', buscar_cidades, name='buscar_cidades')
]
