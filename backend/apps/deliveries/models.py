from django.db import models

from apps.users.models import User


class Delivery(models.Model):
    IN_PROGRESS = 'in_progress'
    FINISHED = 'finished'

    STATUS_CHOICES = (
        (IN_PROGRESS, 'In Progress'),
        (FINISHED, 'Finished'),
    )

    driver = models.ForeignKey(
        User,
        related_name='deliveries',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    status = models.CharField(choices=STATUS_CHOICES, default=IN_PROGRESS)
