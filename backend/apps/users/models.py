from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator


class User(AbstractUser):
    ADMIN = 0
    DRIVER = 1
    DISPATCHER = 2

    ROLE_CHOICES = (
        (ADMIN, 'Administrator'),
        (DRIVER, 'Driver'),
        (DISPATCHER, 'Dispatcher'),
    )

    first_name = models.CharField(max_length=30, validators=[MinLengthValidator(1)])
    last_name = models.CharField(max_length=30, validators=[MinLengthValidator(1)])
    role = models.SmallIntegerField(choices=ROLE_CHOICES, null=True)  # Temp for superuser creation
    phone_number = models.CharField(max_length=20, validators=[MinLengthValidator(10)])
