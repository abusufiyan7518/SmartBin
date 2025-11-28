from django.urls import path
from . import views

urlpatterns = [
    path('addComplaint/',views.addComplaint,name='addComplaint'),
]