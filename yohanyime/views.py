from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import BadHeaderError, message, send_mail
from django.core.mail import EmailMessage
from django.conf import settings
from django.apps import apps

# Index Pages
def index(request):
    worksModel = apps.get_model('mywork', 'Work')
    myworks = worksModel.objects.all
    return render(request,"index/index.html", {'myworks':myworks})
