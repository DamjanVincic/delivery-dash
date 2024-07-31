from drf_spectacular.utils import extend_schema
from rest_framework import views, status
from rest_framework.response import Response

from ..models import Delivery
from ..serializers import DeliverySerializer


class DeliveryDetail(views.APIView):
    @extend_schema(responses={200: DeliverySerializer, 404: None})
    def get(self, request, pk):
        try:
            delivery = Delivery.objects.get(pk=pk)
        except Delivery.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(DeliverySerializer(delivery).data)
