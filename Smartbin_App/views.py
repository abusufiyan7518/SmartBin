from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from django.template import RequestContext
from Smartbin_App.models import Complaint
from .models import Complaint


def addComplaint(request):
    
    return render(request,'Report.html')