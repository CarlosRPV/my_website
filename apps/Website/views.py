from django.shortcuts import render

# Create your views here.

def index_website(request):
    return render(request, 'homepagePrueba.html')

def index_website_homepage(request):
    return render(request, 'homepage.html')