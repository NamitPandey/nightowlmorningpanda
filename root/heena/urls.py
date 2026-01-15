#this is urls file of the project
from django.urls import path
from . import views as views
# from django.contrib.auth import views as auth_views

app_name="heena"

urlpatterns = [
    path("",views.heena_home, name="heena_home"), 
]