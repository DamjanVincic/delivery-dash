from ..models import Delivery
from ..serializers import DeliverySerializer
from rest_framework import views
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema


class DeliveryList(views.APIView):
    @extend_schema(responses=DeliverySerializer(many=True))
    def get(self, request):
        deliveries = Delivery.objects.all()
        serializer = DeliverySerializer(deliveries, many=True)
        return Response(serializer.data)
