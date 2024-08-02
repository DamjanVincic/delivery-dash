from rest_framework import serializers

from ..models import Order


class OrderSerializer(serializers.ModelSerializer):
    is_late = serializers.SerializerMethodField(read_only=True)
    late_time = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'created_at', 'deliver_at', 'buyer_firstname', 'buyer_lastname', 'address', 'phone_number',
                  'price', 'payment_method', 'status', 'delivery', 'comment', 'is_late', 'late_time']
        read_only_fields = ['id', 'created_at', 'status', 'delivery', 'comment']

    def get_is_late(self, obj) -> serializers.BooleanField:
        return obj.delivered_at is not None and obj.delivered_at > obj.deliver_at

    def get_late_time(self, obj):
        return (obj.delivered_at - obj.deliver_at).seconds // 60 if obj.delivered_at is not None else None
