from django.db import models
from django.utils import timezone

class Work(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    desciption = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    link = models.CharField(max_length=200)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
