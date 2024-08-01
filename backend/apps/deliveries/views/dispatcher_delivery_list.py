from django.utils import timezone
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from apps.users.permissions import IsDispatcher
from ..models import Delivery
from ..serializers import DeliverySerializer


class DispatcherDeliveryList(generics.ListAPIView):
    serializer_class = DeliverySerializer
    permission_classes = [IsAuthenticated, IsDispatcher]

    def get_queryset(self):
        return Delivery.objects.filter(
            orders__deliver_at__date=timezone.now().date(),
        ).order_by('status')
