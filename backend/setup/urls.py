from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static 


urlpatterns = [
    path('admin/', admin.site.urls),
    #a rota abaixo está sendo importada do arquivo receitas.urls e usuarios.urls, que é onde está definida a rota para o app receitas e usuarios,
    path('', include('apps.receitas.urls')),
    path('', include('apps.usuarios.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
