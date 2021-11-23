from django.urls import path

from apps.Website.views import index_website, index_website_homepage

app_name = 'website'
urlpatterns = [
    path('prueba', index_website, name='homepage1'),
    path('', index_website_homepage, name='homepage'),
]