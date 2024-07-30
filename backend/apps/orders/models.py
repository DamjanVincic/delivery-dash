from django.db import models
from apps.deliveries.models import Delivery


class Order(models.Model):
    CASH = 0
    CARD = 1

    PENDING = 0
    DELIVERED = 1
    FAILED = 2

    PAYMENT_CHOICES = (
        (CASH, 'Cash'),
        (CARD, 'Card'),
    )

    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (DELIVERED, 'Delivered'),
        (FAILED, 'Failed'),
    )

    created_at = models.DateTimeField(auto_now_add=True)
    deliver_at = models.DateTimeField()
    buyer_firstname = models.CharField(max_length=30)
    buyer_lastname = models.CharField(max_length=30)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(choices=PAYMENT_CHOICES)
    status = models.SmallIntegerField(choices=STATUS_CHOICES, default=PENDING)
    delivery = models.ForeignKey(Delivery, related_name='orders', on_delete=models.SET_NULL, null=True)
