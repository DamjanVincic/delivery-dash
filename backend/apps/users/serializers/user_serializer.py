from rest_framework import serializers

from ..models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

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
        read_only_fields = ['id', 'delivery']
