from rest_framework import serializers

from apps.deliveries.models import Delivery

from ..models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    delivery = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            'role',
            'phone_number',
            'delivery',
        ]
        read_only_fields = ['id']

    def get_delivery(self, obj):
        if delivery := obj.deliveries.filter(status=Delivery.IN_PROGRESS).first():
            return delivery.pk
        return None
