from django.contrib import admin
from apps.usuarios.models import Usuario

class ListandoUsuarios(admin.ModelAdmin):
    list_display = ("id", "username", "is_superuser","last_login")


#Com este registro de admin, o Django irá criar uma interface administrativa para a tabela de usuários diretamente no site admin do Django.
admin.site.register(Usuario, ListandoUsuarios)




