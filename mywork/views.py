from django.shortcuts import render
from django.utils import timezone
from .models import Work

# Create your views here.
def post_list(request):
    posts = Work.objects.all
    return render(request, 'index/index.html', {'posts':posts})
