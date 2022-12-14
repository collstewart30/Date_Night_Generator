from django.db import models
from authentication.models import User


# Create your models here.


class NPS(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event_id = models.CharField(max_length=100, default=0)
    parkCode = models.CharField(max_length=100, default=0)
    title = models.CharField(max_length=250)
    url = models.CharField(max_length=250)
    image_url = models.CharField(max_length=100, default=False)
    park_name = models.CharField(max_length=250)
    state = models.CharField(max_length=250)
    description = models.CharField(max_length=500)
    type = models.CharField(max_length=250)
    saveCurrent = models.CharField(max_length=100, default=False)
    saveFuture = models.CharField(max_length=100, default=False)
    completed = models.CharField(max_length=100, default=False)
    isFavorite = models.CharField(max_length=100, default=False)