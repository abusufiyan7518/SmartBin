from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.template import RequestContext
from Smartbin_App.models import Complaint

def user_login(request):
    return render(request, 'login.html')

def user_reg(request):
    return render(request, 'register.html')

def admin_login(request):
    return render(request, 'adminlogin.html')

def driver_login(request):
    return render(request, 'driverlogin.html')

def admin_reg(request):
    return render(request, 'adminreg.html')

def driver_reg(request):
    return render(request, 'driverreg.html')

def dropdown(request):   
    return render(request, 'dropdown.html')

def home(request): 
    return render(request, 'index.html')
def about(request):  
    return render(request, 'About.html')
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
    return render(request, 'Feature.html')
def navbar(request):
    return render(request, 'navbar.html')
def footer(request):   
    return render(request, 'footer.html')
def managedriver(request):   
    return render(request, 'managedriver.html')
def assignedtruck(request):   
    return render(request, 'Assigned.html')
def update_status(request):
    return render(request, 'Update.html')


def complaint_list(request):
    complaints = Complaint.objects.filter(is_resolved=False).order_by('created_at')
    context = {
        'complaints': complaints,
        }
    return render(request, 'complaintviews.html', context)

