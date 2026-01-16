from django.urls import path
from . import views as views
# from django.contrib.auth import views as auth_views

app_name="nomp"

urlpatterns = [
    path("",views.home, name="home"), 
    path("resume",views.resume, name="resume"), 
    path("skill",views.skill, name="skill"), 
]