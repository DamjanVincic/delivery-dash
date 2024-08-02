from rest_framework import serializers


class DriverOrderFailSerializer(serializers.Serializer):
    comment = serializers.CharField(max_length=255)
