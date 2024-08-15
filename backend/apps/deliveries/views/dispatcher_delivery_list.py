from apps.users.permissions import IsDispatcher
from django.utils import timezone
from drf_spectacular.utils import extend_schema
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import Delivery
from ..serializers import DeliverySerializer


@extend_schema(summary="Get today's deliveries")
class DispatcherDeliveryList(generics.ListAPIView):
    serializer_class = DeliverySerializer
    permission_classes = [IsAuthenticated, IsDispatcher]

    def get_queryset(self):
        return (
            Delivery.objects.filter(orders__deliver_at__date=timezone.now().date())
            .distinct()
            .order_by('-status')
        )
