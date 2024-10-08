from django.db import models

from apps.deliveries.models import Delivery


class Order(models.Model):
    CASH = 'cash'
    CARD = 'card'

    PENDING = 'pending'
    DELIVERED = 'delivered'
    CANCELLED = 'cancelled'

    PAYMENT_CHOICES = (
        (CASH, 'Cash'),
        (CARD, 'Card'),
    )

    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (DELIVERED, 'Delivered'),
        (CANCELLED, 'Cancelled'),
    )

    created_at = models.DateTimeField(auto_now_add=True)
    deliver_at = models.DateTimeField()
    buyer_firstname = models.CharField(max_length=30)
    buyer_lastname = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(choices=PAYMENT_CHOICES)
    status = models.CharField(choices=STATUS_CHOICES, default=PENDING)
    delivery = models.ForeignKey(
        Delivery,
        related_name='orders',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    comment = models.CharField(max_length=255, null=True, blank=True)
    delivered_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'Order #{self.pk}'
