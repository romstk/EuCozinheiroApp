from django.db import models
from django.contrib.auth.models import AbstractUser
''' 
    Classe que abstai o user do auth_user

    Campos que são padrão do auth_user que já existem e serão herdados. 
    Para esta classe inserimos apenas os campos adicionais. 

    Campos padrão do auth_user:
        id, password, last_login, is_superuser, username, last_name, email
        is_staff, isactive, date_joined, first_name
    Campos adicionais:
        uf, cidade
        Campos que não são obrigatórios, pois o usuário pode não informar.
        blank=True - significa que o campo não é obrigatório
        null=True - significa que o campo aceitará o valor null
        max_length=2 - significa que o campo terá no máximo 2 caracteres

'''
class Usuario(AbstractUser):
    uf = models.CharField(max_length=2, blank=True, null=True)
    cidade = models.CharField(max_length=100, blank=True, null=True)
    


def __str__(self):
        return f"Usuário [nome={self.username}]"