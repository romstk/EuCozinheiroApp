
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

from datetime import datetime


''' 
    Criação das classes de modelo que herdarão a classe models 
    
    A classe Receita representa a tabela de receitas no banco de dados.
    Os campos da tabela são definidos como atributos da classe, com seus respectivos tipos e opções.

    imagem =models.ImageField(upload_to="fotos", blank=True)
        campo imagem que armazena o caminho da imagem no banco de dados
        upload_to - caminho onde a imagem será armazenada, neste caso na pasta fotos dentro de media, pois no settins.py está configurado o MEDIA_URL e MEDIA_ROOT
        blank=True - significa que o campo não é obrigatório

    autor=models.ForeignKey(to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="user"
        
        campo autor associado a tabela de usuários para armazenarmos o usuário logado como o autor da receita.
        on_delete - caso o usuário seja deletado vamos atribuir null a este campo
        null=True, significa que o campo aceitará o valor null
        related_name="user" , este campo serve para para facilitar a localização de tabelas e funcionalidades

'''
class Receita(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    descricao = models.TextField(null=False, blank=False)
    ingredientes = models.TextField(null=False, blank=False)
    preparo = models.TextField(null=False, blank=False)
    imagem =models.ImageField(upload_to="fotos", blank=True)
    autor=models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="user"
    )
    data = models.DateTimeField(default=datetime.now, blank=False) #fará com que seja armazenada data e hora da inserção do registro. 
    publicada = models.BooleanField(default=False)
    

    def __str__(self):
        return f"Receita [nome={self.nome}]"