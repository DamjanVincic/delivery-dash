from drf_spectacular.utils import extend_schema
from rest_framework import views, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..models import Delivery
from ..serializers import DeliverySerializer, DeliveryCreateUpdateSerializer


class DeliveryDetail(views.APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @extend_schema(
        responses={200: DeliverySerializer, 404: None}, summary="Get delivery details"
    )
    def get(self, request, pk):
        try:
            delivery = Delivery.objects.get(pk=pk)
        except Delivery.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(DeliverySerializer(delivery).data)

    @extend_schema(
        request=DeliveryCreateUpdateSerializer,
        responses={200: DeliverySerializer, 404: None, 400: None},
        summary="Update delivery",
    )
    def put(self, request, pk):
        try:
            delivery = Delivery.objects.get(pk=pk)
        except Delivery.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = DeliveryCreateUpdateSerializer(delivery, data=request.data)
        if serializer.is_valid():
            delivery = serializer.save()
            serializer = DeliverySerializer(delivery)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @extend_schema(responses={204: None}, summary="Delete delivery")
    def delete(self, request, pk):
        try:
            delivery = Delivery.objects.get(pk=pk)
            delivery.delete()
        except Delivery.DoesNotExist:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)
