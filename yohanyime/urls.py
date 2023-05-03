"""yohanyime URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls.conf import include
from yohanyime import views
urlpatterns = [
    # Index
    path('',views.index,name="index"),
    path('index-1/',views.index1,name="index1"),
    path('index-2/',views.index2,name="index2"),
    path('index-3/',views.index3,name="index3"),
    path('index-4/',views.index4,name="index4"),
    path('index-5/',views.index5,name="index5"),
    path('index-6/',views.index6,name="index6"),
    path('index-7/',views.index7,name="index7"),
    path('index-8/',views.index8,name="index8"),
    path('index-9/',views.index9,name="index9"),
    path('index-10/',views.index10,name="index10"),
    path('index-11/',views.index11,name="index11"),
    path('index-12/',views.index12,name="index12"),
    path('index-13/',views.index13,name="index13"),
    # Account 
    path('account/',include("account.urls")),
    # Admin
    path('admin/', admin.site.urls),
    # Contact
    path('contact/',views.contact,name="contact")

]
