from rest_framework import serializers
from .models import Delivery
from apps.users.serializers import UserSerializer


class DeliverySerializer(serializers.ModelSerializer):
    driver = UserSerializer()

    class Meta:
        model = Delivery
        fields = ['id', 'driver']
        read_only_fields = ['id']
