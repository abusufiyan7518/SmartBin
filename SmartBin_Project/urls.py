"""
URL configuration for SmartBin_Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [

    
    path('admin/', admin.site.urls),
    path('', views.dropdown, name='dropdown'),
    path('user_login/', views.user_login, name='user_login'),
    path('user_register/', views.user_reg, name='user_register'),
    path('admin_login/', views.admin_login, name='admin_login'),
    path('admin_reg/', views.admin_reg, name='admin_reg'),
    path('driver_login/', views.driver_login, name='driver_login'),
    path('driver_reg/', views.driver_reg, name='driver_reg'),
    path('home/', views.home, name='home'),
    path('about/', views.about, name='about'),




    path('contact/', views.contact, name='contact'),
    path('Forget/', views.forget, name='Forget'),
    path('report/', views.report, name='report'),
    path('profile/', views.profile, name='profile'),
    path('bin_status/', views.bin_status, name='bin_status'),
    path('feature/', views.feature, name='feature'),
    path ('navbar/', views.navbar, name='navbar'),
    path ('footer/', views.footer, name='footer'),
    path ('managedriver/', views.managedriver, name='managedriver'),
    path('complaint/', views.complaint_list, name='complaint_list'),
    path('complaint/<int:complaint_id>/resolve/', views.mark_resolved, name='mark_resolved'),
    path('complaint/<int:complaint_id>/unresolve/', views.mark_unresolved, name='mark_unresolved'),
    path('complaint/<int:complaint_id>/delete/', views.delete_complaint, name='delete_complaint'),
    path('complaint/<int:complaint_id>/edit/', views.edit_complaint, name='edit_complaint'),
    path('assignedtruck/', views.assignedtruck, name='assignedtruck'),
    path('update_status/', views.update_status, name='update_status'),
    
# Include URLs from Smartbin_App
    path('smartbin/', include('Smartbin_App.urls')),
    


]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)    
