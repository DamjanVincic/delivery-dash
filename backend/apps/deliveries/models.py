from django.db import models

from apps.users.models import User


class Delivery(models.Model):
    class Meta:
        verbose_name = 'Delivery'
        verbose_name_plural = 'Deliveries'

    IN_PROGRESS = 'in_progress'
    COMPLETED = 'completed'

    STATUS_CHOICES = (
        (IN_PROGRESS, 'In Progress'),
        (COMPLETED, 'Completed'),
    )

    driver = models.ForeignKey(
        User,
        related_name='deliveries',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    status = models.CharField(choices=STATUS_CHOICES, default=IN_PROGRESS)

    def __str__(self):
        return f'Delivery #{self.pk}'
