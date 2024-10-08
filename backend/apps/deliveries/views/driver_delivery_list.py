from apps.users.permissions import IsDriver
from drf_spectacular.utils import extend_schema
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import Delivery
from ..serializers import DeliverySerializer


@extend_schema(summary="Get the driver's assigned delivery")
class DriverDeliveryList(generics.ListAPIView):
    serializer_class = DeliverySerializer
    permission_classes = [IsAuthenticated, IsDriver]

    def get_queryset(self):
        return Delivery.objects.filter(
            driver=self.request.user, status=Delivery.IN_PROGRESS
        )
