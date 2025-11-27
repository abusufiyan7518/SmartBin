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
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from Smartbin_App import views


 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.dropdown, name='dropdown'), 

     path('user_login/', views.login_page, name='user_login'),
    path('user_register/', views.register_page, name='user_register'),

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

]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)    