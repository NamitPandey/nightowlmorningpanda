from django.shortcuts import render

# Create your views here.

def home(request):
    
    return render(request,"nomp/home.html",context={})

def resume(request):

    return render(request, "nomp/resume.html", context={})

def skill(request):

    return render(request, "nomp/skill.html", context={})