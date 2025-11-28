from django.contrib import admin
from .models import Complaint

class ComplaintAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_no', 'email_id', 'complaint_type', 'is_resolved', 'created_at')
    list_filter = ('complaint_type', 'is_resolved')
    search_fields = ('name', 'phone_no', 'email_id')




    

admin.site.register(Complaint, ComplaintAdmin)