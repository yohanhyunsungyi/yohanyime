from . import views
from django.urls import path

urlpatterns = [
    path('', views.work_new, name='work_new'),
]
