from django.urls import path
from . import views as views
# from django.contrib.auth import views as auth_views

app_name="heena"

urlpatterns = [
    path("",views.home, name="heena_home"), 
]