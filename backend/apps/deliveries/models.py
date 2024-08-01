from django.db import models

from apps.users.models import User


class Delivery(models.Model):
    driver = models.OneToOneField(User, related_name='delivery', on_delete=models.SET_NULL, null=True, blank=True)
