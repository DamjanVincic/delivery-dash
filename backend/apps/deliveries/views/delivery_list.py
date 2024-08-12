from drf_spectacular.utils import extend_schema
from rest_framework import views, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..models import Delivery
from ..serializers import DeliverySerializer, DeliveryCreateUpdateSerializer


class DeliveryList(views.APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @extend_schema(responses=DeliverySerializer(many=True), summary="Get all deliveries")
    def get(self, request):
        deliveries = Delivery.objects.all()
        serializer = DeliverySerializer(deliveries, many=True)
        return Response(serializer.data)

    @extend_schema(
        request=DeliveryCreateUpdateSerializer,
        responses={201: DeliverySerializer, 400: None},
        summary="Create delivery"
    )
    def post(self, request):
        serializer = DeliveryCreateUpdateSerializer(data=request.data)
        if serializer.is_valid():
            delivery = serializer.save()
            serializer = DeliverySerializer(delivery)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
