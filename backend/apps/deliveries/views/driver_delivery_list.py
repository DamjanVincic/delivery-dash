from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import Delivery
from ..serializers import DeliverySerializer
from apps.users.permissions import IsDriver


class DriverDeliveryList(generics.ListAPIView):
    serializer_class = DeliverySerializer
    permission_classes = [IsAuthenticated, IsDriver]

    def get_queryset(self):
        return Delivery.objects.filter(driver=self.request.user)
