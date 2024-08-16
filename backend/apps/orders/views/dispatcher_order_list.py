from apps.users.permissions import IsDispatcher
from django.utils import timezone
from drf_spectacular.utils import extend_schema
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import Order
from ..serializers import OrderSerializer


@extend_schema(summary="Get today's orders")
class DispatcherOrderList(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated, IsDispatcher]

    def get_queryset(self):
        return Order.objects.filter(
            deliver_at__date=timezone.now().date(),
        ).order_by('-status', 'deliver_at')
