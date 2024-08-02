from rest_framework import serializers

from apps.orders.models import Order
from apps.users.models import User
from ..models import Delivery


class DeliveryCreateUpdateSerializer(serializers.ModelSerializer):
    driver = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    orders = serializers.PrimaryKeyRelatedField(queryset=Order.objects.all(), many=True)

    class Meta:
        model = Delivery
        fields = ['driver', 'orders']

    def validate(self, data):
        # driver = data['driver']
        # if driver.delivery:
        #     raise serializers.ValidationError('Driver already has a delivery')
        # return data
        if len(set(order.deliver_at.date() for order in data.get('orders'))) > 1:
            raise serializers.ValidationError('Orders must have the same delivery date')
        return data
