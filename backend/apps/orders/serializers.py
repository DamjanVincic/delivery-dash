from rest_framework import serializers
from .models import Order
from apps.deliveries.serializers import DeliverySerializer


class OrderSerializer(serializers.ModelSerializer):
    delivery = DeliverySerializer()

    class Meta:
        model = Order
        fields = ['created_at', 'deliver_at', 'buyer_firstname', 'buyer_lastname', 'address', 'phone_number', 'price',
                  'payment_method', 'status', 'delivery']
        read_only_fields = ['created_at']
