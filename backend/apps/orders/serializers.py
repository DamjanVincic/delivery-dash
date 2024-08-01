from rest_framework import serializers

from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'created_at', 'deliver_at', 'buyer_firstname', 'buyer_lastname', 'address', 'phone_number',
                  'price', 'payment_method', 'status', 'delivery']
        read_only_fields = ['id', 'created_at', 'status', 'delivery']
