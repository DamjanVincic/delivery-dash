from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator
from django.db import models


# TODO: Split users into separate classes?
# TODO: Create user model from scratch? (AbstractBaseUser?)
class User(AbstractUser):
    ADMIN = 'admin'
    DRIVER = 'driver'
    DISPATCHER = 'dispatcher'

    ROLE_CHOICES = (
        (ADMIN, 'Administrator'),
        (DRIVER, 'Driver'),
        (DISPATCHER, 'Dispatcher'),
    )

    first_name = models.CharField(max_length=30, validators=[MinLengthValidator(1)])
    last_name = models.CharField(max_length=30, validators=[MinLengthValidator(1)])
    role = models.CharField(
        choices=ROLE_CHOICES, null=True
    )  # Temp for superuser creation
    phone_number = models.CharField(max_length=20, validators=[MinLengthValidator(10)])
