from django.db import models

# Create your models here.

class Complaint(models.Model):   
    name = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=10, unique=True)
    email_id = models.EmailField(max_length=100, unique=True)
    address = models.CharField(max_length=100, blank=True)
    complaint_type = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='user_photos',blank=True, null=True)
    description = models.TextField()
    is_resolved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Complaint by {self.name} - {self.complaint_type}"
    
  