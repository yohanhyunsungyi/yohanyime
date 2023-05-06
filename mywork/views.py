from django.shortcuts import render
from django.utils import timezone
from .models import Work
from .form import WorkForm
from django.shortcuts import redirect
# Create your views here.
def work_new(request):
    if request.method == "POST":
        form = WorkForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            # post.author = request.user
            # post.published_date = timezone.now()
            post.save()
            return redirect('work_new', pk=post.pk)
    else:
        form = WorkForm()
    return render(request, 'index/workNew.html', {'form': form})
