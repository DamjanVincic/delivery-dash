from ..models import Delivery
from apps.orders.models import Order
from apps.users.models import User
from rest_framework import serializers


class DeliveryCreateUpdateSerializer(serializers.ModelSerializer):
    driver = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    orders = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all(), many=True)

    class Meta:
        model = Delivery
        fields = ['id', 'driver', 'orders']
        read_only_fields = ['id']
