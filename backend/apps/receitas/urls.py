#Arquivo responsável pelo gerenciamento das urls específicas da app receitas que será #importado no urls.py do setup da aplicação geral 
# importamos aqui as views de receitas para poder utilizá-las na lista de rotas/urls
from django.urls import path
from apps.receitas.views import receitas

#Criamos uma lista que será responsável por gerenciar as rotas/urls do app receitas
urlpatterns = [
    path('receitas/', receitas, name='receitas'),
]