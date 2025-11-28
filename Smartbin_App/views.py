from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.template import loader
from django.template import RequestContext
from django.contrib import messages
from .models import Complaint


def addComplaint(request):
    if request.method == 'POST':
        # Get form data
        name = request.POST.get('name')
        phone_no = request.POST.get('phone_no')
        email_id = request.POST.get('email_id')
        address = request.POST.get('address', '')
        complaint_type = request.POST.get('complaint_type')
        description = request.POST.get('description')
        photo = request.FILES.get('photo')
        
        # Validate required fields
        if not all([name, phone_no, email_id, complaint_type, description]):
            messages.error(request, 'Please fill in all required fields.')
            return render(request, 'Report.html')
        
        # Check if phone or email already exists
        if Complaint.objects.filter(phone_no=phone_no).exists():
            messages.error(request, 'A complaint with this phone number already exists.')
            return render(request, 'Report.html')
        
        if Complaint.objects.filter(email_id=email_id).exists():
            messages.error(request, 'A complaint with this email already exists.')
            return render(request, 'Report.html')
        
        # Create and save complaint
        try:
            complaint = Complaint.objects.create(
                name=name,
                phone_no=phone_no,
                email_id=email_id,
                address=address,
                complaint_type=complaint_type,
                description=description,
                photo=photo if photo else None,
                is_resolved=False
            )
            messages.success(request, 'Complaint submitted successfully! Thank you for your feedback.')
            return redirect('report')  # Redirect back to report page
        except Exception as e:
            messages.error(request, f'An error occurred: {str(e)}')
            return render(request, 'Report.html')
    
    # GET request - show the form
    return render(request, 'Report.html')