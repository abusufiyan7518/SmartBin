from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import loader
from django.template import RequestContext
from django.contrib import messages
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
    complaints = Complaint.objects.filter(is_resolved=False).order_by('-created_at')
    resolved_complaints = Complaint.objects.filter(is_resolved=True).order_by('-updated_at')
    context = {
        'complaints': complaints,
        'resolved_complaints': resolved_complaints,
        }
    return render(request, 'complaintviews.html', context)

def mark_resolved(request, complaint_id):
    try:
        complaint = Complaint.objects.get(id=complaint_id)
        complaint.is_resolved = True
        complaint.save()
        messages.success(request, 'Complaint marked as resolved.')
    except Complaint.DoesNotExist:
        messages.error(request, 'Complaint not found.')
    return redirect('complaint_list')

def mark_unresolved(request, complaint_id):
    try:
        complaint = Complaint.objects.get(id=complaint_id)
        complaint.is_resolved = False
        complaint.save()
        messages.success(request, 'Complaint marked as unresolved.')
    except Complaint.DoesNotExist:
        messages.error(request, 'Complaint not found.')
    return redirect('complaint_list')

def delete_complaint(request, complaint_id):
    try:
        complaint = Complaint.objects.get(id=complaint_id)
        complaint.delete()
        messages.success(request, 'Complaint deleted successfully.')
    except Complaint.DoesNotExist:
        messages.error(request, 'Complaint not found.')
    return redirect('complaint_list')

def edit_complaint(request, complaint_id):
    from django.shortcuts import get_object_or_404
    complaint = get_object_or_404(Complaint, id=complaint_id)
    
    if request.method == 'POST':
        complaint.name = request.POST.get('name', complaint.name)
        complaint.phone_no = request.POST.get('phone_no', complaint.phone_no)
        complaint.email_id = request.POST.get('email_id', complaint.email_id)
        complaint.address = request.POST.get('address', complaint.address)
        complaint.complaint_type = request.POST.get('complaint_type', complaint.complaint_type)
        complaint.description = request.POST.get('description', complaint.description)
        if 'photo' in request.FILES:
            complaint.photo = request.FILES['photo']
        complaint.save()
        messages.success(request, 'Complaint updated successfully.')
        return redirect('complaint_list')
    
    return render(request, 'Report.html', {'complaint': complaint, 'edit_mode': True})

