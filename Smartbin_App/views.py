from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.template import RequestContext


def dropdown(request):
    return render(request, 'dropdown.html')
def login_page(request):
    return render(request, 'login.html')

def register_page(request):
    return render(request, 'register.html')

def admin_login(request):
    return render(request, 'adminlogin.html')

def driver_login(request):
    return render(request, 'driverlogin.html')
def admin_reg(request):
    return render(request, 'adminreg.html')

def driver_reg(request):
    return render(request, 'driverreg.html')

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def forget(request):
    return render(request, 'Forget.html')

def report(request):
    return render(request, 'Report.html')   

def profile(request):
    return render(request, 'profile.html')

def bin_status(request):
    return render(request, 'bin.html')

def feature(request):
    return render(request, 'feature.html')