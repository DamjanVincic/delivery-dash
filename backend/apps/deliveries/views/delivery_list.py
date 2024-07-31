from ..models import Delivery
from ..serializers import DeliverySerializer, DeliveryCreateUpdateSerializer
from rest_framework import views
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema


class DeliveryList(views.APIView):
    @extend_schema(responses=DeliverySerializer(many=True))
    def get(self, request):
        deliveries = Delivery.objects.all()
        serializer = DeliverySerializer(deliveries, many=True)
        return Response(serializer.data)

    @extend_schema(request=DeliveryCreateUpdateSerializer, responses={201: DeliverySerializer, 400: None})
    def post(self, request):
        serializer = DeliveryCreateUpdateSerializer(data=request.data)
        if serializer.is_valid():
            delivery = serializer.save()
            serializer = DeliverySerializer(delivery)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
