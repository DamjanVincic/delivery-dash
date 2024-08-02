from django.utils import timezone
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from apps.users.permissions import IsDispatcher
from ..models import Order
from ..serializers import OrderSerializer


class DispatcherOrderList(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated, IsDispatcher]

    def get_queryset(self):
        return Order.objects.filter(
            deliver_at__date=timezone.now().date(),
        ).order_by('status')
