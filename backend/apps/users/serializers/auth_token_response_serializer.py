from rest_framework import serializers

from . import UserSerializer


class AuthTokenResponseSerializer(serializers.Serializer):
    token = serializers.CharField()
    user = UserSerializer()
