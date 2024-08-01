from rest_framework import serializers

from apps.orders.serializers import OrderSerializer
from apps.users.serializers import UserSerializer
from ..models import Delivery


class DeliverySerializer(serializers.ModelSerializer):
    driver = UserSerializer()
    orders = OrderSerializer(many=True, read_only=True)

    class Meta:
        model = Delivery
        fields = ['id', 'driver', 'orders']
        read_only_fields = ['id']
